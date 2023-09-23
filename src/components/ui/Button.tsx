import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-Main-Purple",
        "text-White",
        "flex",
        "items-center",
        "justify-center",
        "hover:bg-Main-Purple-Hover",
        "rounded-full", 
        "px-6",
        "disabled:opacity-25"
      ],
      secondary: [
        "bg-Light-Grey-Light-Bg",
        "text-Main-Purple",
        "flex",
        "items-center",
        "justify-center",
        "dark:bg-White",
        "rounded-full",
        "px-6",
        "disabled:opacity-25"
      ],
      destructive: [
        "bg-Red",
        "text-White",
        "flex",
        "items-center",
        "justify-center",
        "rounded-full",
        "hover:bg-Red-Hover",
        "px-6",
        "disabled:opacity-25"
      ],
    },
    size: {
      large: ["text-[0.9375rem]", "h-12", "font-extrabold"],
      small: ["text-[0.8125rem]", "h-10", "font-extrabold"],
    },
  },
//   compoundVariants: [{ intent: "primary", size: "small",}],
  defaultVariants: {
    intent: "primary",
    size: "small",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => <button className={button({ intent, size, className })} {...props} />;