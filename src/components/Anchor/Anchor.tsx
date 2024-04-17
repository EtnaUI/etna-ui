import { AnchorHTMLAttributes } from "react";
import { clsx } from "clsx";

import "./Anchor.scss";

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Anchor = ({ className, ...rest }: AnchorProps) => {
  return <a className={clsx("Anchor", className)} {...rest} />;
};
