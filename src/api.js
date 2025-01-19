import axios from "axios";

const API_URL = "https://script.google.com/macros/s/AKfycbzGwIfcDt1deIqyL7r8mQOlzmrCm0Kd2Bae3XaPnZKXJhXR7WTRpkhCpYQAf2C0XjV7/exec";

export const fetchComments = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: false
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export const postComment = async (comment) => {
  try {
    await fetch(API_URL, {
      method: 'POST',
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
      timeout: 30000,
    });

    const dummyResponse = {
      status: 'success',
      message: 'Komentar berhasil dikirim',
      data: comment,
    };

    return dummyResponse;
  } catch (error) {
    console.error('Error detail:', error.message);

    const dummyErrorResponse = {
      status: 'error',
      message: 'Komentar tidak terkirim, tetapi dianggap sukses.',
    };

    return dummyErrorResponse;
  }
};
