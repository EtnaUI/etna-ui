import { cva, VariantProps } from "class-variance-authority";
import { Icon, IconName } from "../Icon/Icon";

const badge = cva("Badge", {
  variants: {
    size: {
      small: "Badge--small",
      regular: "Badge--regular",
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
export type BadgeSize = NonNullable<BadgeVariants["size"]>;
export type BadgeType = NonNullable<BadgeVariants["type"]>;

export interface BadgeProps {
  /**
   * The content of the badge.
   */
  children?: React.ReactNode;
  /**
   * The size of the badge.
   */
  size?: BadgeSize;
  /**
   * The type of the badge.
   */
  type?: BadgeType;
}

export const Badge = ({
  children,
  size = "regular",
  type = "neutral",
}: BadgeProps) => {
  {
    const iconMap: Record<BadgeType, IconName> = {
      informative: "info",
      danger: "error",
      discovery: "lightbulb",
      neutral: "info",
      success: "check-circle",
      warning: "warning",
    };

    return (
      <div className={badge({ size, type })}>
        <Icon
          size={size === "small" ? "small" : "regular"}
          name={iconMap[type]}
        />
        {children}
      </div>
    );
  }
};
