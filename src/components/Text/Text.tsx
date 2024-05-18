type FontWeight = "light" | "regular" | "medium" | "bold";

export type TextProps = {
  children: React.ReactNode;
  fontWeight?: FontWeight;
};

export const Text = ({ children, fontWeight = "regular" }: TextProps) => {
  return <p className={`Text Text--${fontWeight}`}>{children}</p>;
};
