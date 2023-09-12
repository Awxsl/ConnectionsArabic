import React from "react";

function GridMessage({ message }) {
  return (
    <div className="absolute bg-black text-white opacity-80 text-xl px-5 py-1 top-2 left-1/2 -translate-x-16">
      {message}
    </div>
  );
}

export default GridMessage;
