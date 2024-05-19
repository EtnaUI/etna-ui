import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Components/Button", () => {
  it("renders the button with default props", () => {
    const { getByText } = render(<Button>Button</Button>);
    const buttonElement = getByText("Button");
    expect(buttonElement).toBeVisible();
  });

  it("renders the button with primary variant", () => {
    const { getByText } = render(<Button variant="primary">Button</Button>);
    const buttonElement = getByText("Button");
    expect(buttonElement).toHaveClass("button--primary");
  });

  it("should call onClick when button is clicked", () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button onClick={onClick}>Button</Button>);
    const buttonElement = getByText("Button");
    buttonElement.click();
    expect(onClick).toHaveBeenCalled();
  });

  it("should not call onClick when button is disabled", () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <Button onClick={onClick} disabled>
        Button
      </Button>,
    );
    const buttonElement = getByText("Button");
    buttonElement.click();
    expect(onClick).not.toHaveBeenCalled();
  });
});
