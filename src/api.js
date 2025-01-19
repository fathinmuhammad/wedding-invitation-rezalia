import axios from "axios";

const API_URL = "https://script.google.com/macros/s/AKfycbzzEBGOR6BBqDI2tEqmhZZRo3YacBWl77TUga9-_M_FEww0ew2tR54cZdj_v8ajst4-/exec";

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
