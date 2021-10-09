import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=53c8e141ade48a23ccddfabcb5233dc0';
//Get popular movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`,);
  return resp.data.results;
};
//Get upcoming movies
export const getUpcomingrMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`,);
  return resp.data.results;
};

//Get popular tv
export const getPopularTv = async () => {
    const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`,);
    return resp.data.results;
  };