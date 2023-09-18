import React from "react";

function Overlay({ children }) {
  return (
    <div
      className="fixed left-0 z-[9999999] h-[180vh] w-full bg-black text-white flex justify-center items-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      {children}
    </div>
  );
}

export default Overlay;
