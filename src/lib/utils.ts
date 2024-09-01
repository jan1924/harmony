import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isObject(value: any): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}
