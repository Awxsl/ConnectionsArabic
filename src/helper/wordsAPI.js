export const postWordsToServer = async (data) => {
  try {
    console.log(data);
    await fetch("http://localhost:8000/api/words", {
      method: "POST",
      body: JSON.stringify({data: data}),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
};
