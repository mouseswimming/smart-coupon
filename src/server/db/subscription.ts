import { db } from "@/db";
import { UserSubscriptionTable } from "@/db/schema";

export function createUserSubscription(
  data: typeof UserSubscriptionTable.$inferInsert
) {
  /* 
    when the user id is already existed, we do nothing
  */
  return db
    .insert(UserSubscriptionTable)
    .values(data)
    .onConflictDoNothing({ target: UserSubscriptionTable.clerkUserId });
}
