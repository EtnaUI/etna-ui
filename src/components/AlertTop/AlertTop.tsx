import { cva, VariantProps } from "class-variance-authority";
import { Info, Close } from "@mui/icons-material";
import React from "react";

const alertTop = cva("AlertTop", {
  variants: {
    type: {
      critical: "AlertTop--critical",
      danger: "AlertTop--danger",
      warning: "AlertTop--warning",
      success: "AlertTop--success",
      informative: "AlertTop--informative",
      discovery: "AlertTop--discovery",
    },
  },
  defaultVariants: {
    type: "informative",
  },
});

export type AlertTopVariants = VariantProps<typeof alertTop>;

export interface AlertTopProps {
  /**
   * The content of the alert.
   */
  children?: React.ReactNode;
  /**
   * The type of the alert.
   */
  type?: NonNullable<AlertTopVariants["type"]>;
}

export const AlertTop = ({ children, type = "informative" }: AlertTopProps) => {
  return (
    <div className={alertTop({ type })}>
      <Info fontSize="inherit" className="Alert__icon" />
      <div className="AlertTop__content">{children}</div>
      <Close fontSize="inherit" className="AlertTop__close" />
    </div>
  );
};
