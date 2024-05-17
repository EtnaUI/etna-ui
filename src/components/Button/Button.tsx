import { ButtonHTMLAttributes } from "react";
import { Text } from "../Text";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  size?: "small" | "medium" | "large";
}

export const Button = ({
  children,
  size = "medium",
  variant = "primary",
  ...props
}: ButtonProps) => (
  <button className={`button button--${variant} button--${size}`} {...props}>
    <Text variant="caption">{children}</Text>
  </button>
);
