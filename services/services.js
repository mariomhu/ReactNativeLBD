import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=53c8e141ade48a23ccddfabcb5233dc0';
//Get popular movies
export const getPopularMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/popular?${apiKey}`,);
  return resp.data.results;
};
//Get upcoming movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`,);
  return resp.data.results;
};

//Get family movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,);//ID do genero family
  return resp.data.results;
};

//Get documentary movies
export const getDocumentaryMovies = async () => {
  const resp = await axios.get(`${apiUrl}/discover/movie?${apiKey}&with_genres=99`,);//ID do genero documentary
  return resp.data.results;
};

//Get popular tv
export const getPopularTv = async () => {
  const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`,);
  return resp.data.results;
};