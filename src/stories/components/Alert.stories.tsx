import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Alert",
  component: Alert,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    title: "Alert",
    children: "This is an alert.",
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {};

/**
 * An Alert can be solid or outline.
 */
export const Design = () => {
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <Alert title="Solid" design="solid">
        This is a solid alert.
      </Alert>
      <Alert title="Outline" design="outline">
        This is an outline alert.
      </Alert>
    </div>
  );
};

/**
 * An Alert can be critical, danger, warning, success, informative, or discovery.
 */
export const Type = () => {
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <Alert title="Critical" type="critical">
        This is a critical alert.
      </Alert>
      <Alert title="Danger" type="danger">
        This is a danger alert.
      </Alert>
      <Alert title="Warning" type="warning">
        This is a warning alert.
      </Alert>
      <Alert title="Success" type="success">
        This is a success alert.
      </Alert>
      <Alert title="Informative" type="informative">
        This is an informative alert.
      </Alert>
      <Alert title="Discovery" type="discovery">
        This is a discovery alert.
      </Alert>
    </div>
  );
};
