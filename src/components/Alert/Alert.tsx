import { cva, VariantProps } from "class-variance-authority";
import { Info, Close } from "@mui/icons-material";

const alert = cva("Alert", {
  variants: {
    design: {
      solid: "Alert--solid",
      outline: "Alert--outline",
    },
    type: {
      critical: "Alert--critical",
      danger: "Alert--danger",
      warning: "Alert--warning",
      success: "Alert--success",
      informative: "Alert--informative",
      discovery: "Alert--discovery",
    },
  },
  defaultVariants: {
    design: "solid",
    type: "informative",
  },
});

export type AlertVariants = VariantProps<typeof alert>;

export interface AlertProps {
  /**
   * The title of the alert.
   */
  title?: string;
  /**
   * The content of the alert.
   */
  children?: React.ReactNode;
  /**
   * The design of the alert.
   */
  design?: NonNullable<AlertVariants["design"]>;
  /**
   * The type of the alert.
   */
  type?: NonNullable<AlertVariants["type"]>;
}

export const Alert = ({
  title,
  children,
  design = "solid",
  type = "informative",
}: AlertProps) => {
  return (
    <div className={alert({ design, type })}>
      <Info fontSize="inherit" className="Alert__icon" />
      <div className="Alert__content">
        {title && <h2 className="Alert__title">{title}</h2>}
        <div>{children}</div>
      </div>
      <Close fontSize="inherit" className="Alert__close" />
    </div>
  );
};
