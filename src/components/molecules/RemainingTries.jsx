import React, { useState } from "react";
import Dot from "../atoms/Dot";

function RemainingTries({ numOfTries }) {
  return (
    <div className="flex flex-col justify-center items-center mr-10">
      <p className="text-lg mb-1"> المحاولات المتبقية</p>
      <div className="flex">
        {Array.from({ length: numOfTries }, (_, i) => (
          <Dot key={i}/>
        ))}
      </div>
    </div>
  );
}

export default RemainingTries;
