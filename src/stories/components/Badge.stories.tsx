import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Badge",
  component: Badge,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    children: "Badge",
  },
  argTypes: {
    children: {
      type: "string",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {};

/**
 * A badge can have different types.
 */
export const Type = () => {
  return (
    <div style={{ gap: "1rem", display: "flex", alignItems: "center" }}>
      <Badge type="neutral">Neutral</Badge>
      <Badge type="discovery">Discovery</Badge>
      <Badge type="danger">Danger</Badge>
      <Badge type="warning">Warning</Badge>
      <Badge type="success">Success</Badge>
      <Badge type="informative">Informative</Badge>
    </div>
  );
};

/**
 * A badge can have different sizes.
 */
export const Size = () => {
  return (
    <div style={{ gap: "1rem", display: "flex", alignItems: "center" }}>
      <Badge size="small">Small</Badge>
      <Badge size="regular">Medium</Badge>
      <Badge size="large">Large</Badge>
    </div>
  );
};

export const WithinText = () => {
  return (
    <p>
      This is a paragraph with a <Badge>badge</Badge> in it.
    </p>
  );
};
