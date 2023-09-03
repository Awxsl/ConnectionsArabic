import React from "react";
import Dot from "../atoms/Dot";

function RemainingTries({ numOfTries = 4 }) {
  return (
    <div className="flex flex-col justify-center items-center mr-10">
      <p className="text-lg mb-1"> المحاولات المتبقية</p>
      <div className="flex">
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
    </div>
  );
}

export default RemainingTries;
