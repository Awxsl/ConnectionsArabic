import { useContext, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineQuestionCircle, AiTwotoneCalendar } from "react-icons/ai";
import OptionsDropdown from "./OptionsDropdown";
import DropdownItem from "../atoms/DropdownItem";
import SettingsModal from "./SettingsModal";
import InfoModal from "./InfoModal";
import WordsContext from "../../context/WordsContext";

function WordsGridOptions() {
  const [openSettingsModal, setOpenSettingsModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const{totalChallenges, challengeNumber, setChallengeNumber} = useContext(WordsContext)

  return (
    <div className="my-10 px-8 py-4 border-y-[1px] border-gray-300 w-full flex flex-row-reverse justify-between items-center">
      {openSettingsModal && <SettingsModal isModalOpen={setOpenSettingsModal} />}
      {openInfoModal && <InfoModal isModalOpen={setOpenInfoModal} />}
      <div className="flex">
        <AiOutlineQuestionCircle
          className="w-10 h-10 cursor-pointer mx-6 text-gray-500 hover:text-black transition-all duration-150"
          onClick={() => setOpenInfoModal(true)}
        />
        <IoMdSettings
          className="w-10 h-10 cursor-pointer text-gray-500 hover:text-black transition-all duration-150"
          onClick={() => setOpenSettingsModal(true)}
        />
      </div>
      <OptionsDropdown
        icon={<AiTwotoneCalendar className="w-5 h-5" />}
        title={"تحديات اخرى"}
      >
        {Array.from({ length: totalChallenges }, (_, i) => (
          <DropdownItem title={totalChallenges-i} idx={totalChallenges-i-1} onClick={() => setChallengeNumber(totalChallenges-i-1)}/>
        ))}
      </OptionsDropdown>
    </div>
  );
}

export default WordsGridOptions;
