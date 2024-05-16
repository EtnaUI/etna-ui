import { ButtonHTMLAttributes } from "react";

import "./Button.scss";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button = ({
  size = "medium",
  variant = "primary",
  ...props
}: ButtonProps) => (
  <button className={`button button--${variant} button--${size}`} {...props} />
);
