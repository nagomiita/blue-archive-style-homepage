import type React from "react";

const BASE_CARD_CLASSES =
  "cursor-pointer rounded-md border-2 font-bold leading-none inline-block transform skew-x-[-10deg]";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className={`${BASE_CARD_CLASSES} p-4 bg-white shadow-md`}>
      <div className="transform skew-x-[10deg]">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Card;
