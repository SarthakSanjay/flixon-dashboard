import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(word: string) {
  let newWord = word.split(" ").map((w) => {
    return w.charAt(0).toUpperCase() + w.slice(1);
  });
  return newWord.join(" ");
}
