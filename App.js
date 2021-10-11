/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//https://api.themoviedb.org/3/movie/550?api_key=53c8e141ade48a23ccddfabcb5233dc0
import React from 'react';
import { View} from 'react-native';
import Home from './screens/Home';
import {getPopularMovies} from './services/services';

const App = () => {

  return (
    <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
      <Home></Home>
    </View>
  );
};
//
export default App;
