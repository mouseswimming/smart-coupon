"use server";

import { productDetailsSchema } from "@/schemas/products";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { createProduct as createProductDB } from "@/server/db/products";
import { redirect } from "next/navigation";

/* 
  we need to define our return here since it can return a promise or undefined, it we hit the redirect block
*/
export async function createProduct(
  unsafeData: z.infer<typeof productDetailsSchema>
): Promise<{ error: boolean; message: string } | undefined> {
  const { userId } = await auth();
  const { success, data } = productDetailsSchema.safeParse(unsafeData);

  if (!success || userId == null) {
    return { error: true, message: "There was an error creating your product" };
  }

  const { id } = await createProductDB({ ...data, clerkUserId: userId });

  redirect(`/dashboard/products/${id}/edit?tab=countries`);
}
