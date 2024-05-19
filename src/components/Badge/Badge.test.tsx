import { render, screen } from "@testing-library/react";
import { Badge, BadgeProps } from "./Badge";

describe("Badge", () => {
  const renderBadge = (props: BadgeProps) => {
    render(<Badge {...props} />);
  };

  it("should render the badge with the correct text", () => {
    renderBadge({ children: "Badge" });

    expect(screen.getByText("Badge")).toBeInTheDocument();
  });
});
