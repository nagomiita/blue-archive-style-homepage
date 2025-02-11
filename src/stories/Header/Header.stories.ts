import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Header } from "./Header";

const meta: Meta<typeof Header> = {
	title: "Example/Header",
	component: Header, // コンポーネントのアノテーションを追加
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: "fullscreen",
	},
	args: {
		onBack: fn(),
		onLobby: fn(),
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Title",
		ap: 50,
		maxAp: 100,
		credit: 1000,
		pyroxene: 500,
	},
};
