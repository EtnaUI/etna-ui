import { cva, type VariantProps } from "class-variance-authority";

const text = cva("Text", {
  variants: {
    weight: {
      light: "Text--light",
      regular: "Text--regular",
      medium: "Text--medium",
      bold: "Text--bold",
    },
    variant: {
      "heading-1": "Text--heading-1",
      "heading-2": "Text--heading-2",
      "heading-3": "Text--heading-3",
      headline: "Text--headline",
      subheadline: "Text--subheadline",
      body: "Text--body",
      "body-large": "Text--body-large",
      caption: "Text--caption",
    },
  },
  defaultVariants: {
    weight: "regular",
    variant: "body",
  },
});

export type TextVariants = VariantProps<typeof text>;

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * The weight of the text.
   */
  weight?: NonNullable<TextVariants["weight"]>;
  /**
   * The variant of the text.
   */
  variant?: NonNullable<TextVariants["variant"]>;
}

export const Text = ({ className, weight, variant, ...props }: TextProps) => {
  return <p className={text({ className, weight, variant })} {...props} />;
};
