import { useState } from "react";
import InputField from "../molecules/InputField";
import Button from "../atoms/Button";
import TitleCardWithDelete from "../molecules/TitleCardWithDelete";
import { postWordsToServer } from "../../helper/wordsAPI";

function WordsForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    word1: "",
    word2: "",
    word3: "",
    word4: "",
  });

  const { title, word1, word2, word3, word4 } = formData;

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (title === "" || word1 === "" || word2 === "" || word3 === "" || word4 === "") {
      setErrorMessage("ادخل جميع البيانات");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    const newData = {
      title: title,
      items: [word1, word2, word3, word4],
    };
    setData((prevState) => [...prevState, newData]);
    setFormData({
      title: "",
      word1: "",
      word2: "",
      word3: "",
      word4: "",
    });
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const postWords = async () => {
    postWordsToServer(data)
    setData([]);
  };

  const deleteGroup = (title) => {
    setData((prevState) => prevState.filter((group) => group.title !== title));
  };

  return (
    <form>
      <h2 className="font-bold text-xl mt-2">المجموعة الاولى</h2>
      <InputField
        id="title"
        value={formData.title}
        disabled={data.length === 4}
        type="text"
        onChange={onChange}
        label={"اسم المجموعة"}
        placeholder=""
      />
      <div className="border-b-2" />
      <InputField
        id="word1"
        value={formData.word1}
        disabled={data.length === 4}
        type="text"
        onChange={onChange}
        label={" الكلمة الاولى"}
        placeholder="ادخل الكلمة الاولى"
      />
      <InputField
        id="word2"
        disabled={data.length === 4}
        value={formData.word2}
        type="text"
        onChange={onChange}
        label={" الكلمة الثانية"}
        placeholder="ادخل الكلمة الثانية"
      />
      <InputField
        id="word3"
        value={formData.word3}
        disabled={data.length === 4}
        type="text"
        onChange={onChange}
        label={" الكلمة الثالثة"}
        placeholder="ادخل الكلمة الثالثة"
      />
      <InputField
        id="word4"
        value={formData.word4}
        type="text"
        disabled={data.length === 4}
        onChange={onChange}
        label={" الكلمة الرابعة"}
        placeholder="ادخل الكلمة الرابعة"
      />
      {errorMessage && <p className="text-red-500 pb-2 text-center">{errorMessage}</p>}

      {data.length !== 4 ? (
        <Button
          label="اضف"
          onBtnClick={(e) => onFormSubmit(e)}
          className="w-full h-10 text-xl"
        />
      ) : (
        <Button
          label="ارسل الكلمات"
          onBtnClick={postWords}
          className="w-full h-10 text-xl"
        />
      )}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-5">
        {data.map((group) => (
          <TitleCardWithDelete
            title={group.title}
            onClick={() => deleteGroup(group.title)}
          />
        ))}
      </div>
    </form>
  );
}

export default WordsForm;
