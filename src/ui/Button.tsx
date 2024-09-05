import React from "react";

type ButtonProps = {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      className={`rounded-lg bg-blue-500 text-white hover:bg-blue-700 font-medium disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
