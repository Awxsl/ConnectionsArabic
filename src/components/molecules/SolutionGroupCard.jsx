import React from "react";

function SolutionGroupCard({ header, items, hidden, idx }) {
  const colors = ["#f9df6d", "#a0c35a", "#b0c4ef", "#ba81c5"];

  return (
    <div
      className={`w-full flex flex-col rounded-md items-center py-5 my-1 text-black ${hidden && 'hidden'}`}
      style={{backgroundColor: `${colors[idx]}`}}
    >
      <h3 className="text-4xl pb-4 font-semibold" dir="rtl">{header}</h3>
      <div className="flex flex-row-reverse text-2xl">
        {items.map((item, i) => (
          <p className="px-1">{`${
            i !== items.length - 1 ? "،" : ""
          } ${item}`}</p>
        ))}
      </div>
    </div>
  );
}

export default SolutionGroupCard;
