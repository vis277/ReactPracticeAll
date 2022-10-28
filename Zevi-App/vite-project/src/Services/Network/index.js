import axios from "axios";

export const getData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.status === 200 ? response.data : null;
  } catch (err) {
    console.log(err);
  }
};
