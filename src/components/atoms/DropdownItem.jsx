import React, { useContext } from "react";
import WordsContext from "../../context/WordsContext";
import { FaCheck } from "react-icons/fa";

function DropdownItem({ title, idx, onClick }) {

  const {challengeNumber} = useContext(WordsContext)

  return (
      <li className="bg-white w-full flex flex-row-reverse relative justify-center items-center py-2 border-b-[1px] hover:bg-gray-50 cursor-pointer" onClick={onClick}>
        {title}
        {challengeNumber === idx && <FaCheck className="w-4 h-4 text-blue-400 absolute left-4"/>}
      </li>
  );
}

export default DropdownItem;
