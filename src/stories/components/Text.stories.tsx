import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Text",
  component: Text,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    variant: "body",
    weight: "regular",
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground: Story = {
  args: {
    children: "Hello, world!",
  },
};

export const Weight = () => {
  return (
    <div>
      <Text weight="light">Light</Text>
      <Text weight="regular">Regular</Text>
      <Text weight="medium">Medium</Text>
      <Text weight="bold">Bold</Text>
    </div>
  );
};

export const Variant = () => {
  return (
    <div>
      <Text variant="heading-1">Heading 1</Text>
      <Text variant="heading-2">Heading 2</Text>
      <Text variant="heading-3">Heading 3</Text>
      <Text variant="headline">Headline</Text>
      <Text variant="subheadline">Subheadline</Text>
      <Text variant="body">Body</Text>
      <Text variant="body-large">Body Large</Text>
      <Text variant="caption">Caption</Text>
    </div>
  );
};
