import axios from "axios";

const unsplashApiUrl = "https://api.unsplash.com/";
const unsplashApiKey = process.env.REACT_APP_UNSPLASH_KEY;

const randomCount = () => Math.floor(Math.random() * 30) + 6;

export const fetchImages = async (searchTerm) => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `${unsplashApiUrl}search/photos?page=1&query=${searchTerm}&${unsplashApiKey}`
    );
    return results;
  } catch (err) {
    return { error: err.response.data.errors[0] };
  }
};

export const fetchRandomImages = async () => {
  try {
    const { data } = await axios.get(
      `${unsplashApiUrl}/photos/random?count=${randomCount()}&${unsplashApiKey}`
    );
    return data;
  } catch (err) {
    console.log(err.response);
  }
};
