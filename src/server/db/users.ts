import { db } from "@/db";
import { ProductTable, UserSubscriptionTable } from "@/db/schema";
import { CACTH_TAGS, revalidateDbCache } from "@/lib/cache";
import { eq } from "drizzle-orm";

export async function deleteUser(clerkUserId: string) {
  /* 
    we handle the deletion in batch so if any of them fail, it will roll back
  */
  const [userSubscriptions, products] = await db.batch([
    db
      .delete(UserSubscriptionTable)
      .where(eq(UserSubscriptionTable.clerkUserId, clerkUserId))
      .returning({ id: UserSubscriptionTable.id }),
    db
      .delete(ProductTable)
      .where(eq(ProductTable.clerkUserId, clerkUserId))
      .returning({ id: ProductTable.id }),
  ]);

  userSubscriptions.forEach((sub) => {
    revalidateDbCache({
      tag: CACTH_TAGS.subscription,
      id: sub.id,
      userId: clerkUserId,
    });
  });

  products.forEach((sub) => {
    revalidateDbCache({
      tag: CACTH_TAGS.products,
      id: sub.id,
      userId: clerkUserId,
    });
  });

  return [userSubscriptions, products];
}
