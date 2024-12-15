import { revalidateTag } from "next/cache";
import { unstable_cache } from "next/cache";
import { cache } from "react";

export type ValidTags =
  | ReturnType<typeof getGlobalTag>
  | ReturnType<typeof getUserTag>
  | ReturnType<typeof getIdTag>;

export const CACTH_TAGS = {
  products: "products",
  productViews: "productViews",
  subscription: "subscription",
} as const;

export function getGlobalTag(tag: keyof typeof CACTH_TAGS) {
  return `global: ${CACTH_TAGS[tag]}` as const;
}

export function getUserTag(userId: string, tag: keyof typeof CACTH_TAGS) {
  return `user: ${userId}-${CACTH_TAGS[tag]}` as const;
}

export function getIdTag(id: string, tag: keyof typeof CACTH_TAGS) {
  return `id: ${id}-${CACTH_TAGS[tag]}` as const;
}

/* 
  Add this tag to all query, so when it is called, all cache will be cleared.
*/
export function clearFullCache() {
  revalidateTag("*");
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function dbCache<T extends (...args: any[]) => Promise<any>>(
  cb: Parameters<typeof unstable_cache<T>>[0],
  { tags }: { tags: ValidTags[] }
) {
  return cache(unstable_cache<T>(cb, undefined, { tags: [...tags, "*"] }));
}

export function revalidateDbCache({
  tag,
  userId,
  id,
}: {
  tag: keyof typeof CACTH_TAGS;
  userId?: string;
  id?: string;
}) {
  revalidateTag(getGlobalTag(tag));

  if (userId != null) {
    revalidateTag(getUserTag(userId, tag));
  }

  if (id != null) {
    revalidateTag(getIdTag(id, tag));
  }
}
