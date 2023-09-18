import React from "react";
import Card from "../atoms/Card";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

function TitleCardWithDelete({ title, onClick }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <Card className="border-gray-100 border-2 p-5 relative flex justify-center text-lg font-bold">
        {title}
        <FaTimes
          onClick={onClick}
          className="bg-red-500 text-white w-7 h-7 p-1 cursor-pointer rounded-full absolute -top-3 -left-3"
        />
      </Card>
    </motion.div>
  );
}

export default TitleCardWithDelete;
