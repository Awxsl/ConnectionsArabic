import { useContext, useState } from "react";
import WordCard from "../molecules/WordCard";
import WordsContext from "../../context/WordsContext";
import GridMessage from "../atoms/GridMessage";

function WordsGrid({message}) {
  const {selectedWords, setSelectedWords, words} = useContext(WordsContext)

  const onClick = (selectedWord) => {
    if (selectedWords.includes(selectedWord))
      setSelectedWords(selectedWords.filter((word) => word != selectedWord));
    else setSelectedWords([...selectedWords, selectedWord]);
  };

  return (
    <div className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-2 mx-2 w-full mt-4"  >
      {message && <GridMessage message={message}/>}
      {words.map(word => (
        <WordCard title={word} selectedWords={selectedWords} changeWordsArray={onClick}/>
      ))}
    </div>
  );
}

export default WordsGrid;
