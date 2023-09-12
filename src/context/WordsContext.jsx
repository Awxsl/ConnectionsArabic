import { createContext, useEffect, useState } from "react";
import { shuffle } from "../helper/arrayOperations";

const WordsContext = createContext();

export const WordsProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [wordGroups, setWordGroups] = useState([]);
  const [submittedWords, setSubmittedWords] = useState([]);
  const[selectedWords, setSelectedWords] = useState([])
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:8000/api/words')
      const {data} = await response.json()
      let allWords = []
      data.forEach(group => allWords = [...allWords, ...group.items])
      setWords(shuffle(allWords))
      setWordGroups(data)
      setLoading(false)
    }
    getData()
  }, [])


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
        setWordGroups
      }}
    >
      {children}
    </WordsContext.Provider>
  );
};

export default WordsContext;
