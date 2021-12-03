import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key":"5f6e804e59msh6a0efc6bd2d317cp127601jsn9c7fcc387089",
    },
  });

  return data;
};
