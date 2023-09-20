import React, { useContext, useEffect, useState } from "react";
import WordsGrid from "../organisms/WordsGrid";
import Button from "../atoms/Button";
import RemainingTries from "../molecules/RemainingTries";
import WordsContext from "../../context/WordsContext";
import SolutionGroupCard from "../molecules/SolutionGroupCard";
import { isArrayInside, getWordGroup } from "../../helper/arrayOperations";
import { motion } from "framer-motion";
import WordsGridOptions from "../molecules/WordsGridOptions";
import WordsGridLoading from "../organisms/WordsGridLoading";

function Connections() {
  const {
    words,
    selectedWords,
    wordGroups,
    setSelectedWords,
    setSubmittedWords,
    submittedWords,
    setWords,
    challengeNumber,
    loading,
  } = useContext(WordsContext);
  const [numOfTries, setNumOfTries] = useState(4);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setNumOfTries(4);
    setCorrectAnswers([]);
    setSelectedWords([]);
    setSubmittedWords([]);
  }, [challengeNumber]);

  console.log(loading)

  const submitWords = () => {
    const itemGroups = wordGroups.map((group) => group.items);
    const isLengthFour = selectedWords.length === 4;
    const isCorrectGroup = isArrayInside(itemGroups, selectedWords);
    const isSelectedPreviously = isArrayInside(submittedWords, selectedWords);

    if (isLengthFour) {
      if (isCorrectGroup) {
        setWords(words.filter((word) => !selectedWords.includes(word)));
        setCorrectAnswers((prevState) => [
          ...prevState,
          getWordGroup(itemGroups, selectedWords),
        ]);
        setSelectedWords([]);
      } else if (isSelectedPreviously) {
        setMessage("توقعته مسبقاً");
      } else {
        console.log("entered else");
        if (numOfTries - 1 < 1) {
          setTimeout(() => {
            setCorrectAnswers([0, 1, 2, 3]);
          }, 2000);
        }
        setSubmittedWords((prevState) => [...prevState, selectedWords]);
        setMessage(`${numOfTries - 1 < 1 ? "انتهت المحاولات" : "توقع خاطئ"}`);
        setNumOfTries(numOfTries - 1);
      }
    }
    checkStatus();
  };

  const checkStatus = () => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div className="flex h-full my-auto flex-col justify-center items-center mx-5">
      <WordsGridOptions />
      {correctAnswers.map((num, index) => (
        <motion.div
          className="w-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <SolutionGroupCard
            header={wordGroups[num].title}
            items={wordGroups[num].items}
            idx={index}
          />
        </motion.div>
      ))}
      {correctAnswers.length !== 4 ? (
        <>
          {loading ? <WordsGridLoading /> : <WordsGrid message={message} />}
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
      ) : (
        <Button
          label={"اعادة"}
          className="w-1/2 mt-4"
          onBtnClick={() => window.location.reload()}
        />
      )}
    </div>
  );
}

export default Connections;
