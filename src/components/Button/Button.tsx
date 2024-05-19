import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  size?: "small" | "medium" | "large";
  /**
   * Disables the button.
   */
  disabled?: boolean;
}

export const Button = ({
  children,
  size = "medium",
  variant = "primary",
  ...props
}: ButtonProps) => (
  <button className={`button button--${variant} button--${size}`} {...props}>
    {children}
  </button>
);
