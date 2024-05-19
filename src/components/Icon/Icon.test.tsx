import { render } from "@testing-library/react";
import { Icon, IconProps } from "./Icon";

describe("Icon", () => {
  const defaultProps: IconProps = {
    name: "info",
  };

  test("renders the icon with default props", () => {
    const { getByTestId } = render(<Icon {...defaultProps} />);
    const iconElement = getByTestId("icon-info");
    expect(iconElement).toBeVisible();
  });
});
