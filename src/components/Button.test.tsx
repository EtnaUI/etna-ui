import { render, fireEvent } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("calls onClick handler when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    const button = getByText("Click me");

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
