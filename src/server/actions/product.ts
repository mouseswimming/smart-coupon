"use server";

import { productDetailsSchema } from "@/schemas/products";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { createProduct as createProductDB } from "@/server/db/products";
import { redirect } from "next/navigation";

/* 
  call function from client to server in a secure and safe way
*/

export async function createProduct(
  unsafeData: z.infer<typeof productDetailsSchema>
) {
  const { userId } = await auth();
  const { success, data } = productDetailsSchema.safeParse(unsafeData);

  if (!success || userId == null) {
    return { error: true, message: "There was an error creating your product" };
  }

  const { id } = await createProductDB({ ...data, clerkUserId: userId });

  redirect(`/dashboard/products/${id}/edit?tab=countries`);
}
