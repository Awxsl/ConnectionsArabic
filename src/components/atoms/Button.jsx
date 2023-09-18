import React from "react";

function Button({
  onBtnClick,
  label,
  type = "button",
  outline,
  disabled,
  className,
}) {
  return (
    <button
      disabled={disabled}
      onClick={onBtnClick}
      type={type}
      className={`text-2xl px-16 py-3 mx-2 rounded-3xl transition-all duration-500 flex justify-center items-center ${
        outline
          ? "bg-white text-black hover:bg-gray-100"
          : "text-white bg-black border-none hover:opacity-80"
      } ${className}`}
      style={{ border: `${outline && "1px solid black"}` }}
    >
      {label}
    </button>
  );
}

export default Button;
