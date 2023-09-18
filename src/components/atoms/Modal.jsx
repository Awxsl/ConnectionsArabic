import React from "react";
import Overlay from "./Overlay";
import { FaTimes } from "react-icons/fa";

function Modal({ children, title='اعداد', isModalOpen }) {
  return (
    <Overlay>
      <div className="w-5/6 2xl:w-1/3 bg-white text-black py-5 px-8 rounded-md">
        <div className="flex justify-between items-center">
          <FaTimes
            className="w-8 h-8 cursor-pointer"
            onClick={() => isModalOpen(false)}
          />
          <p className="text-2xl font-bold">{title}</p>
        </div>
        <div className="flex flex-col items-center my-5">
          {children}
        </div>
      </div>
    </Overlay>
  );
}

export default Modal;
