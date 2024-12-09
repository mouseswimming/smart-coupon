import { db } from "@/db";
import { ProductCustomizationTable, ProductTable } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export function getProducts(userId: string, { limit }: { limit?: number }) {
  return db.query.ProductTable.findMany({
    where: ({ clerkUserId }, { eq }) => eq(clerkUserId, userId),
    orderBy: ({ createdAt }, { desc }) => desc(createdAt),
    limit,
  });
}

export async function createProduct(data: typeof ProductTable.$inferInsert) {
  const [newProduct] = await db
    .insert(ProductTable)
    .values(data)
    .returning({ id: ProductTable.id });

  try {
    await db
      .insert(ProductCustomizationTable)
      .values({ productId: newProduct.id })
      .onConflictDoNothing({
        target: ProductCustomizationTable.productId,
      });
  } catch (e) {
    /* 
      when there is error happen during add product customization talbe. we should delete the product as well
    */
    await db.delete(ProductTable).where(eq(ProductTable.id, newProduct.id));
    console.error(e);
  }

  return newProduct;
}

export async function deleteProduct({
  id,
  userId,
}: {
  id: string;
  userId: string;
}) {
  const { rowCount } = await db
    .delete(ProductTable)
    .where(and(eq(ProductTable.id, id), eq(ProductTable.clerkUserId, userId)));

  // when row count > 0, it means we delete successfully
  return rowCount > 0;
}
