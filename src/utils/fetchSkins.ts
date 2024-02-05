import axios from "axios";

const url = import.meta.env.VITE_URL;

const fetchSkins = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchSkins;
