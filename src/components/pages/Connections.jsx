import React, { useContext, useState } from "react";
import WordsGrid from "../organisms/WordsGrid";
import Button from "../atoms/Button";
import RemainingTries from "../molecules/RemainingTries";
import WordsContext from "../../context/WordsContext";
import SolutionGroupCard from "../molecules/SolutionGroupCard";
import { isArrayInside, getWordGroup } from "../../helper/arrayOperations";
import { motion } from "framer-motion";

function Connections() {
  const {
    words,
    selectedWords,
    wordGroups,
    setSelectedWords,
    setSubmittedWords,
    submittedWords,
    setWords,
  } = useContext(WordsContext);
  const [numOfTries, setNumOfTries] = useState(4);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useState(false);

  const submitWords = () => {
    const itemGroups = wordGroups.map((group) => group.items);
    if (
      selectedWords.length === 4 &&
      isArrayInside(itemGroups, selectedWords)
    ) {
      setWords(words.filter((word) => !selectedWords.includes(word)));
      setCorrectAnswers((prevState) => [
        ...prevState,
        getWordGroup(itemGroups, selectedWords),
      ]);
      setSelectedWords([]);
    } else if (
      selectedWords.length === 4 &&
      isArrayInside(submittedWords, selectedWords)
    ) {
      setMessage("توقعته مسبقاً");
    } else if (selectedWords.length === 4) {
      setNumOfTries(numOfTries - 1);
      setSubmittedWords((prevState) => [...prevState, selectedWords]);
      setMessage(`${numOfTries <= 1 ? "انتهت المحاولات" : "توقع خاطئ"}`);
    }
    setTimeout(() => {
      setMessage("");
      if (numOfTries <= 1) {
        setCorrectAnswers([0, 1, 2, 3]);
        setFinished(true);
      }
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center items-center mx-5">
      {wordGroups.map((answer, idx) => (
        <motion.div
          className="w-full"
          key={correctAnswers.includes(idx) ? idx : 0}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <SolutionGroupCard
            header={answer.title}
            items={answer.items}
            hidden={!correctAnswers.includes(idx)}
            idx={idx}
          />
        </motion.div>
      ))}
      {!finished && (
        <>
          <WordsGrid message={message} />
          <div className="my-5 flex-col sm:flex sm:flex-row-reverse">
            <Button
              outline={true}
              label={"حذف"}
              onBtnClick={() => setSelectedWords([])}
            />
            <Button
              label={"تأكيد"}
              onBtnClick={submitWords}
              disabled={message !== ""}
            />
            <RemainingTries numOfTries={numOfTries} />
          </div>
        </>
      )}
    </div>
  );
}

export default Connections;
