import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  style?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const styleMap : Record<NonNullable<ButtonProps["style"]>, string> = {
  primary : "bg-light_sea_green-400 px-10 py-4 font-bold text-gold-sm text-baby_powder-500 hover:bg-light_sea_green-500",
  secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
  danger: "bg-red-500 text-white hover:bg-red-600",
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
