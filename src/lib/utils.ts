import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* 
  remove tailing slash at the end of the url
*/
export function removeTailingSlash(path: string) {
  return path.replace(/\/$/, "");
}
