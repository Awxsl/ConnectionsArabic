import { createContext, useEffect, useState } from "react";
import { shuffle } from "../helper/arrayOperations";

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [wordGroups, setWordGroups] = useState([]);
  const [submittedWords, setSubmittedWords] = useState([]);
  const[selectedWords, setSelectedWords] = useState([])
  const[challengeNumber, setChallengeNumber] = useState(1)

  useEffect(() => {
    getData(challengeNumber)
  }, [])
  
  const getData = async (challengeNumber) => {
    const response = await fetch(`http://localhost:8000/api/words/${challengeNumber}`)
    const {data} = await response.json()
    console.log(data)
    console.log('Request Sent')
    let allWords = []
    data.forEach(group => allWords = [...allWords, ...group.items])
    setWords(shuffle(allWords))
    setWordGroups(data)
  }

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
        challengeNumber
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export default WordsContext;
