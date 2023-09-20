export const postWordsToServer = async (data) => {
  try {
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    await fetch(`${BASE_URL}/api/words`, {
      method: "POST",
      body: JSON.stringify({data: data}),
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
};
