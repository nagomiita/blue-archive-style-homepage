import React from "react";
import { getColor, type ColorType } from "@/stories/Color";

interface ButtonProps {
  color: ColorType;
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

const BASE_BUTTON_CLASSES =
  "cursor-pointer rounded-md border-2 font-bold leading-none inline-block transform skew-x-[-10deg]";

export const Button = ({
  color,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const { background, text } = getColor(color);
  const sizeClass = getSizeClasses(size);

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES}  ${sizeClass}`}
      style={{ backgroundColor: background, color: text }}
      {...props}
    >
      <span className="block transform skew-x-[10deg]">{label}</span>{" "}
    </button>
  );
};
