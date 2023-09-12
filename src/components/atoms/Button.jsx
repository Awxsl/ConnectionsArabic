import React from "react";

function Button({ onBtnClick, label, outline, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={onBtnClick}
      className={`text-2xl px-16 py-3 mx-2 rounded-3xl transition-all duration-500 ${
        outline
          ? "bg-white text-black hover:bg-gray-100"
          : "text-white bg-black border-none hover:opacity-80"
      }`}
      style={{border: `${outline && '1px solid black'}`}}
    >
      {label}
    </button>
  );
}

export default Button;
