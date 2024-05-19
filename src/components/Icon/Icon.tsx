import icons from "./icons.json";

export type IconName = keyof typeof icons;

export interface IconProps {
  /**
   * The name of the icon.
   */
  name: IconName;
  /**
   * The size of the icon.
   */
  size?: "small" | "regular" | "large";
  /**
   * Additional class names.
   */
  className?: string;
}

export const Icon = ({ className, name, size = "regular" }: IconProps) => {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`Icon Icon--${size} ${className}`}
      data-testid={`icon-${name}`}
    >
      {icons[name].paths.map((path, index) => (
        <path key={index} d={path} />
      ))}
    </svg>
  );
};
