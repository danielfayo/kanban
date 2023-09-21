import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-Main-Purple",
        "text-Lines-Light",
        "flex",
        "items-center",
        "justify-center",
        "hover:bg-Main-Purple-Hover",
        "rounded-full"
      ],
      secondary: [
        "bg-Light-Grey-Light-Bg",
        "text-Main-Purple",
        "flex",
        "items-center",
        "justify-center",
        "dark:bg-White",
        "rounded-full"
      ],
      destructive: [
        "bg-Red",
        "text-Lines-Light",
        "flex",
        "items-center",
        "justify-center",
        "rounded-full",
        "hover:bg-Red-Hover"
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