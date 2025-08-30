import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  style?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  size?: "sm" | "md" | "lg";
};

/**
 * @param type - Button type attribute
 * @param style - Button style variant
 * @param children - Button content
 * @param onClick - Click event handler
 * @param className - Additional CSS classes
 * @param size - Button size variant
 */
const styleMap: { [key in NonNullable<ButtonProps["style"]>]: string } = {
  primary: "px-4 py-2 bg-light_sea_green-400 hover:bg-light_sea_green-600 text-white transition-colors duration-300",
  secondary: "px-4 py-2 bg-baby_powder-900 hover:bg-light_sea_green-400 text-light_sea_green-400 hover:text-white border border-light_sea_green-400 transition-colors duration-300",
  danger: "px-4 py-2 bg-red-600 hover:bg-red-800 text-white transition-colors duration-300", 
};
const Button: React.FC<ButtonProps> = ({
  style = "primary",
  children,
  onClick,
  className = "",
  type = "button",
}) => (
  <button
    className={`rounded ${styleMap[style]} ${className}`} type={type}  
    onClick={onClick}>
    {children}
  </button>
);

export default Button;
