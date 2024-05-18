import type { Meta, StoryObj } from "@storybook/react";
import { Alert, Text } from "../../components";

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
        <Text>This is a solid alert.</Text>
      </Alert>
      <Alert title="Outline" design="outline">
        <Text>This is an outline alert.</Text>
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
        <Text>This is a critical alert.</Text>
      </Alert>
      <Alert title="Danger" type="danger">
        <Text>This is a danger alert.</Text>
      </Alert>
      <Alert title="Warning" type="warning">
        <Text>This is a warning alert.</Text>
      </Alert>
      <Alert title="Success" type="success">
        <Text>This is a success alert.</Text>
      </Alert>
      <Alert title="Informative" type="informative">
        <Text>This is an informative alert.</Text>
      </Alert>
      <Alert title="Discovery" type="discovery">
        <Text>This is a discovery alert.</Text>
      </Alert>
    </div>
  );
};
