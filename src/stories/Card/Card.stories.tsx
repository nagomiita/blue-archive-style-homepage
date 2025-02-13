import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "獲得可能報酬",
  },
};

export const TrinityAndStriker: Story = {
  args: {
    children: (
      <div className="flex space-x-4">
        <p style={{ color: "#2e4b73" }}>トリニティ総合学園/</p>
        <p style={{ color: "#ff0000" }}>STRIKER</p>
      </div>
    ),
  },
};
