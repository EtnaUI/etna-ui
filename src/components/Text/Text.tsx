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

export type TextProps = {
  children: React.ReactNode;
  variant?: Variant;
  fontWeight?: FontWeight;
};

export const Text = ({
  children,
  variant = "body",
  fontWeight = "regular",
}: TextProps) => {
  return (
    <p className={`Text Text--${variant} Text--${fontWeight}`}>{children}</p>
  );
};
