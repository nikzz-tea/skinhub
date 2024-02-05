import axios from "axios";
import Skin from "../models/skin";

const url = import.meta.env.VITE_URL;

const fetchSkins = async () => {
  try {
    const { data } = await axios.get<Skin[]>(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchSkins;
