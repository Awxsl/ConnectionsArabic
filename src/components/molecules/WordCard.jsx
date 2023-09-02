import React from "react";
import Card from "../atoms/Card";

function WordCard({ title, isActive }) {
  return (
    <Card>
      <div
        className={`flex justify-center px-24 py-8 cursor-pointer ${
          isActive ? "bg-[#5A594E] text-white" : "bg-[#EFEFE6] text-black"
        }`}
      >
        <p className={`text-3xl font-bold `}>{title}</p>
      </div>
    </Card>
  );
}

export default WordCard;
