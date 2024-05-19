import { cva, VariantProps } from "class-variance-authority";
import {
  Info,
  Lightbulb,
  Error,
  Warning,
  CheckCircle,
} from "@mui/icons-material";

const badge = cva("Badge", {
  variants: {
    size: {
      small: "Badge--small",
      medium: "Badge--medium",
      large: "Badge--large",
    },
    type: {
      neutral: "Badge--neutral",
      discovery: "Badge--discovery",
      danger: "Badge--danger",
      warning: "Badge--warning",
      success: "Badge--success",
      informative: "Badge--informative",
    },
  },
});

export type BadgeVariants = VariantProps<typeof badge>;

export interface BadgeProps {
  /**
   * The content of the badge.
   */
  children?: React.ReactNode;
  /**
   * The size of the badge.
   */
  size?: NonNullable<BadgeVariants["size"]>;
  /**
   * The type of the badge.
   */
  type?: NonNullable<BadgeVariants["type"]>;
}

export const Badge = ({
  children,
  size = "medium",
  type = "neutral",
}: BadgeProps) => {
  const iconMap = {
    neutral: <Info fontSize="inherit" />,
    discovery: <Lightbulb fontSize="inherit" />,
    danger: <Error fontSize="inherit" />,
    warning: <Warning fontSize="inherit" />,
    success: <CheckCircle fontSize="inherit" />,
    informative: <Info fontSize="inherit" />,
  };

  return (
    <div className={badge({ size, type })}>
      {iconMap[type]}
      {typeof children === "string" ? <span>{children}</span> : children}
    </div>
  );
};
