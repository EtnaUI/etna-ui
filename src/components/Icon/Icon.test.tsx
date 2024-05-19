import { render } from "@testing-library/react";
import { Icon, IconProps } from "./Icon";

describe("Icon", () => {
  const defaultProps: IconProps = {
    name: "info",
  };

  it("renders the icon with test id", () => {
    const { getByTestId } = render(<Icon {...defaultProps} />);
    const iconElement = getByTestId("icon-info");
    expect(iconElement).toBeInTheDocument();
  });
});
