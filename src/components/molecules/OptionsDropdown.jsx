import React, { useState } from "react";

function OptionsDropdown({ children, icon, title }) {
  const [expanded, setExpanded] = useState(false);


  const toggleExpanded = () => {
    setExpanded(!expanded)
  }
  return (
    <div className="relative">
      <div className="flex items-center border-[1px] border-black opacity-50 px-6 py-2 cursor-pointer rounded-3xl hover:opacity-100 transition-all duration-200" onClick={toggleExpanded}>
        <p className="pr-3 text-lg font-semibold">{title}</p>
        {icon}
      </div>
      {expanded && 
      <ul className="absolute z-50 w-full h-96 overflow-y-scroll">
        {children}
      </ul>
      }
    </div>
  );
}

export default OptionsDropdown;
