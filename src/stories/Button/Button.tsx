import React from "react";

interface ButtonProps {
	primary?: boolean;
	backgroundColor?: string;
	size?: "small" | "medium" | "large";
	label: string;
	onClick?: () => void;
}

const getSizeClasses = (size?: "small" | "medium" | "large") => {
	switch (size) {
		case "small":
			return "px-4 py-2.5";
		case "large":
			return "px-6 py-3";
		default:
			return "px-5 py-2.5";
	}
};

const getModeClasses = (isPrimary: boolean) =>
	isPrimary
		? "text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700"
		: "text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white";

const BASE_BUTTON_CLASSES =
	"cursor-pointer rounded-md border-2 font-bold leading-none inline-block transform skew-x-[-20deg]";

export const Button = ({
	primary = false,
	backgroundColor,
	size = "medium",
	label,
	...props
}: ButtonProps) => {
	const modeClass = getModeClasses(primary);
	const sizeClass = getSizeClasses(size);

	return (
		<button
			type="button"
			className={`${BASE_BUTTON_CLASSES} ${modeClass} ${sizeClass}`}
			style={{ backgroundColor }}
			{...props}
		>
			<span className="block transform skew-x-[20deg]">{label}</span>
		</button>
	);
};
