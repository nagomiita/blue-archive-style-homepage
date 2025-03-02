import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
	title: "Example/Modal",
	component: Modal,
	tags: ["autodocs"],
	argTypes: {
		title: { control: "text" },
		children: { control: "text" },
		onClose: { action: "closed" },
	},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
	args: {
		title: "S.C.H.A.L.E NEWS",
		children: "This is the content of the modal.",
	},
};

export const WithLongContent: Story = {
	args: {
		title: "Modal with Long Content",
		children: (
			<div>
				<p>This is the content of the modal.</p>
				<p>More content...</p>
				<p>Even more content...</p>
				<p>And even more content...</p>
			</div>
		),
	},
};
