import { ReactNode } from "react";
import { clsx } from "clsx";

import "./Text.scss";

type FontWeight = "light" | "regular" | "medium" | "bold";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "headline"
  | "subheadline"
  | "body"
  | "body-large"
  | "caption";

/**
 * Props for the Text component.
 */
/**
 * Props for the Text component.
 */
export interface TextProps {
  /**
   * The content to be displayed inside the Text component.
   */
  children: ReactNode;

  /**
   * The variant of the text.
   */
  variant?: Variant;

  /**
   * The font weight of the text.
   */
  fontWeight?: FontWeight;
}

export const Text = ({ children, fontWeight, variant }: TextProps) => {
  const className = clsx("Text", {
    [`Text--${variant}`]: variant,
    [`Text--${fontWeight}`]: fontWeight,
  });

  return <div className={className}>{children}</div>;
};
