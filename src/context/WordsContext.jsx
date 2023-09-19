import { createContext, useEffect, useState } from "react";
import { shuffle } from "../helper/arrayOperations";

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [wordGroups, setWordGroups] = useState([]);
  const [submittedWords, setSubmittedWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [totalChallenges, setTotalChallenges] = useState(1);
  const [challengeNumber, setChallengeNumber] = useState(0);

  useEffect(() => {
    getData(challengeNumber);
  }, [challengeNumber]);

  const getData = async (challengeNumber) => {
    const response = await fetch(`http://localhost:8000/api/words/`);
    const { data } = await response.json();
    console.log(data[challengeNumber]);
    console.log("Request Sent");
    let allWords = [];
    data[challengeNumber].data.forEach(
      (group) => (allWords = [...allWords, ...group.items])
    );
    setWords(shuffle(allWords));
    setTotalChallenges(data.length);
    setWordGroups(data[challengeNumber].data);
  };

  return (
    <WordsContext.Provider
      value={{
        words,
        setWords,
        submittedWords,
        setSubmittedWords,
        selectedWords,
        setSelectedWords,
        wordGroups,
        setWordGroups,
        setChallengeNumber,
        challengeNumber,
        totalChallenges,
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export default WordsContext;
