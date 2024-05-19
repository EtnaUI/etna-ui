import { render, fireEvent } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("should render the button with the correct text", () => {
    const { getByText } = render(<Button>Click me</Button>);

    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);

    fireEvent.click(getByText("Click me"));

    expect(onClick).toHaveBeenCalled();
  });

  it("should not call the onClick function when disabled", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick} disabled>
        Click me
      </Button>,
    );

    fireEvent.click(getByText("Click me"));

    expect(onClick).not.toHaveBeenCalled();
  });
});
