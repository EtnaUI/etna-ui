import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Hello, world!",
  },
};

export const AllVariants = () => {
  return (
    <div>
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
      <Text variant="headline">Headline</Text>
      <Text variant="subheadline">Subheadline</Text>
      <Text variant="body-large">Body Large</Text>
      <Text variant="body">Body</Text>
      <Text variant="caption">Caption</Text>
      <Text>Default</Text>
    </div>
  );
};

export const AllWeights = () => {
  return (
    <div>
      <Text fontWeight="light">Light</Text>
      <Text fontWeight="regular">Regular</Text>
      <Text fontWeight="medium">Medium</Text>
      <Text fontWeight="bold">Bold</Text>
    </div>
  );
};
