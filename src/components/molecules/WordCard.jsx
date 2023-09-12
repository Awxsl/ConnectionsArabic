import React, { useContext, useState } from "react";
import Card from "../atoms/Card";
import WordsContext from "../../context/WordsContext";

function WordCard({ title, changeWordsArray }) {
  const [isActive, setIsActive] = useState(false);

  const{selectedWords} = useContext(WordsContext)

  const onCardClick = () => {
    if (selectedWords.length < 4 || isActive) {
      setIsActive((prevState) => !prevState);
      changeWordsArray(title);
    }
  };

  return (
    <div
      className={`flex justify-center py-8 w-full cursor-pointer rounded-md ${
        selectedWords.includes(title) ? "bg-[#5A594E] text-white" : "bg-[#EFEFE6] text-black"
      }`}
      onClick={onCardClick}
    >
      <p className={`text-3xl font-bold `}>{title}</p>
    </div>
  );
}

export default WordCard;
