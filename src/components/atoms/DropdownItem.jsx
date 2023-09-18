import React from "react";
import { Link } from "react-router-dom";

function DropdownItem({ title, goTo }) {
  return (
    <Link to={goTo}>
      <li className="bg-white w-full text-center py-2 border-b-[1px] hover:bg-gray-50 cursor-pointer">
        {title}
      </li>
    </Link>
  );
}

export default DropdownItem;
