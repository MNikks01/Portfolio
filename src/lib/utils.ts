import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeInOutCirc = [0.85, 0, 0.15, 1] as const;
