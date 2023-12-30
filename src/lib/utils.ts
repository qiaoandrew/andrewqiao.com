import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const fontSizeClassGroup = [
  {
    text: ["3", "3.5", "4", "4.5", "5", "6", "8", "9", "10", "12"],
  },
];

const textColorClassGroup = [
  {
    text: [
      "transparent",
      "background",
      "foreground",
      "primary",
      "primary-foreground",
      "secondary-foreground",
      "muted-foreground",
      "border",
      "ring",
      "destructive",
      "destructive-foreground",
      "destructive-border",
      "warning",
      "warning-foreground",
      "warning-border",
      "success",
      "success-foreground",
      "success-border",
    ],
  },
];

const customTwMerge = extendTailwindMerge<"text-color" | "font-size">({
  extend: {
    classGroups: {
      "text-color": textColorClassGroup,
      "font-size": fontSizeClassGroup,
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
