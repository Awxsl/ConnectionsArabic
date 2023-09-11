import { useContext, useState } from "react";
import WordCard from "../molecules/WordCard";
import WordsContext from "../../context/WordsContext";

function WordsGrid() {
  const {selectedWords, setSelectedWords, words} = useContext(WordsContext)

  const onClick = (selectedWord) => {
    if (selectedWords.includes(selectedWord))
      setSelectedWords(selectedWords.filter((word) => word != selectedWord));
    else setSelectedWords([...selectedWords, selectedWord]);
  };

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2 mx-2 w-full mt-4"  >
      {words.map(word => (
        <WordCard title={word} selectedWords={selectedWords} changeWordsArray={onClick}/>
      ))}
    </div>
  );
}

export default WordsGrid;
