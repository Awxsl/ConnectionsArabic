import React from "react";
import { challengeSample } from "../../helper/challengeSample";
import WordCard from "../molecules/WordCard";
import LoadingSpinner from "../atoms/LoadingSpinner";

function WordsGridLoading() {
  return (
    <div className="relative w-full mt-4">
      <LoadingSpinner classname="absolute w-full h-full flex justify-center items-center z-50" />
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 w-full blur-lg">
        {challengeSample.map((word) => (
          <WordCard title={word} />
        ))}
      </div>
    </div>
  );
}

export default WordsGridLoading;
