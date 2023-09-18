import React, { useState } from "react";
import Card from "../atoms/Card";
import WordsForm from "../organisms/WordsForm";

function AddWords() {
  return (
    <div className="flex justify-center items-center mb-10" dir="rtl">
      <Card className="shadow-lg p-16 border-2 border-gray-100">
        <WordsForm />
      </Card>
    </div>
  );
}

export default AddWords;
