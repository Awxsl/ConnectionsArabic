import { createContext, useEffect, useState } from "react";
import { shuffle } from "../helper/arrayOperations";

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wordGroups, setWordGroups] = useState([]);
  const [submittedWords, setSubmittedWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [totalChallenges, setTotalChallenges] = useState(1);
  const [challengeNumber, setChallengeNumber] = useState(0);

  useEffect(() => {
    getData(challengeNumber);
  }, [challengeNumber]);

  const getData = async (challengeNumber) => {
    setLoading(true)
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    const response = await fetch(`${BASE_URL}/api/words/${challengeNumber}`);
    const { data, count } = await response.json();
    let allWords = [];
    data.forEach((group) => (allWords = [...allWords, ...group.items]));
    setWords(shuffle(allWords));
    setTotalChallenges(count);
    setWordGroups(data);
    setLoading(false)
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
        loading
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export default WordsContext;
