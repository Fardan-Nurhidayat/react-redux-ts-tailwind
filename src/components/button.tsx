import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  style?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const styleMap : Record<NonNullable<ButtonProps["style"]>, string> = {
  primary: "bg-emerald-400 text-white hover:bg-emerald-500",
  secondary: "bg-amber-400 text-white hover:bg-amber-500",
  danger: "bg-rose-400 text-white hover:bg-red-500",
};

/**
 * @param type - Button type attribute
 * @param style - Button style variant
 * @param children - Button content
 * @param onClick - Click event handler
 * @param className - Additional CSS classes
 */
const Button: React.FC<ButtonProps> = ({
  style = "primary",
  children,
  onClick,
  className = "",
}) => (
  <button
    className={`px-4 py-2 rounded ${styleMap[style]} ${className}`}
    onClick={onClick}>
    {children}
  </button>
);

export default Button;
