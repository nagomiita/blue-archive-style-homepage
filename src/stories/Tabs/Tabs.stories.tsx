import type { Meta, StoryObj } from "@storybook/react";
import Tabs from "./Tabs";

const meta: Meta<typeof Tabs> = {
	title: "Example/Tabs",
	component: Tabs,
	tags: ["autodocs"],
	argTypes: {
		labels: { control: "object" },
		children: { control: "object" },
	},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	args: {
		labels: ["お知らせ", "イベント", "不具合のお知らせ"],
		children: [
			<div key="1">Content for Tab 1</div>,
			<div key="2">Content for Tab 2</div>,
			<div key="3">Content for Tab 3</div>,
		],
	},
};

export const WithCustomContent: Story = {
	args: {
		labels: ["Overview", "Details", "Settings"],
		children: [
			<div key="1">Overview content goes here.</div>,
			<div key="2">Details content goes here.</div>,
			<div key="3">Settings content goes here.</div>,
		],
	},
};
