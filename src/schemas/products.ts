import { removeTailingSlash } from "@/lib/utils";
import { string, z } from "zod";

/* 
  transform done after validation
*/
export const productDetailsSchema = z.object({
  name: string().min(1, "Required"),
  url: z.string().url().min(1, "Required").transform(removeTailingSlash),
  description: z.string().optional(),
});
