import React from "react";

interface ButtonProps {
	color?: "primary" | "secondary";
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

const getModeClasses = (color?: "primary" | "secondary") => {
	switch (color) {
		case "primary":
			return "text-white bg-blue-archive border-blue-archive dark:bg-blue-archive dark:border-blue-archive";
		case "secondary":
			return "text-white bg-[#2b95f7] border-[#2b95f7] dark:bg-[#2b95f7] dark:border-[#2b95f7]";
		default:
			return "text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white";
	}
};

const BASE_BUTTON_CLASSES =
	"cursor-pointer rounded-md border-2 font-bold leading-none inline-block transform skew-x-[-10deg]"; // 角度を浅くする

export const Button = ({
	color,
	backgroundColor,
	size = "medium",
	label,
	...props
}: ButtonProps) => {
	const modeClass = getModeClasses(color);
	const sizeClass = getSizeClasses(size);

	return (
		<button
			type="button"
			className={`${BASE_BUTTON_CLASSES} ${modeClass} ${sizeClass}`}
			style={{ backgroundColor }}
			{...props}
		>
			<span className="block transform skew-x-[10deg]">{label}</span>{" "}
			{/* テキストの角度も調整 */}
		</button>
	);
};
