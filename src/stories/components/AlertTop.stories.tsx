import type { Meta, StoryObj } from "@storybook/react";
import { AlertTop } from "../../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Alert Top",
  component: AlertTop,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    children: "This is an alert top.",
  },
} satisfies Meta<typeof AlertTop>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {};

/**
 * An Alert can be critical, danger, warning, success, informative, or discovery.
 */
export const Type = () => {
  return (
    <div style={{ display: "grid", gap: "1rem" }}>
      <AlertTop type="critical">This is a critical alert.</AlertTop>
      <AlertTop type="danger">This is a danger alert.</AlertTop>
      <AlertTop type="warning">This is a warning alert.</AlertTop>
      <AlertTop type="success">This is a success alert.</AlertTop>
      <AlertTop type="informative">This is an informative alert.</AlertTop>
      <AlertTop type="discovery">This is a discovery alert.</AlertTop>
    </div>
  );
};
