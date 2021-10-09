/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//https://api.themoviedb.org/3/movie/550?api_key=53c8e141ade48a23ccddfabcb5233dc0
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {getPopularMovies} from './services/services';

const App = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    getPopularMovies().then(movies => {
      setMovie(movies[0]);
    }).catch(err => {
      setError(err);
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Movie Name {movie.original_title}</Text>
      <Text>Movie Language {movie.original_language}</Text>
      <Text>Realese Date {movie.release_date}</Text>
      {error && <Text style={{color:'red'}}>Error in the server</Text>}
    </View>
  );
};
//
export default App;
