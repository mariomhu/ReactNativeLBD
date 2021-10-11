import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Dimensions, FlatList, ScrollView, ActivityIndicator} from 'react-native';
import {getPopularMovies,getUpcomingMovies,getPopularTv,getFamilyMovies,getDocumentaryMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';
import react from 'react';
import List from '../components/List';
import Error from '../components/Error';

const dimensions = Dimensions.get('screen');
const Home = () => {
    const [moviesImages, setMoviesImages] = useState();
    const [popularMovies, setPopularMovies] = useState();
    const [popularTv, setPopularTv] = useState();
    const [familyMovies, setFamilyMovies] = useState();
    const [documentaryMovies, setDocumentaryMovies] = useState();

    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);

    const getData = () => {
      return Promise.all([
        getUpcomingMovies(),
        getPopularMovies(),
        getPopularTv(),
        getFamilyMovies(),
        getDocumentaryMovies()
      ])
    }
    useEffect(() => {
      getData().then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvData,
          familyMoviesData,
          documentaryMoviesData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.forEach(movie => {
              moviesImagesArray.push('https://image.tmdb.org/t/p/w500/'+movie.poster_path)
          });
          setMoviesImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setFamilyMovies(familyMoviesData);
          setDocumentaryMovies(documentaryMoviesData);
          setLoaded(true);
        },
      ).catch(() => {
        setError(true);
      }).finally(() => {
        setLoaded(true)
      })

    }, []);
    return (
      <react.Fragment>
        {loaded && !error && (<ScrollView>
          {/* Upcoming Movies */}
          {moviesImages && (<View style={styles.sliderContainer}>
              <SliderBox 
                images={moviesImages} 
                dotStyle={styles.sliderStyle}
                sliderBoxHeight={dimensions.height / 1.5} 
                autoplay
                resizeMode="cover"
                circleLoop={true}/>
                
          </View>)}
          
          {/* Popular Movies */}
          {popularMovies && (
          <View style={styles.carousel}>
            <List title={'Popular Movies'} content={popularMovies} />
          </View>)}
          
          {/* Popular Tv */}
          {popularTv && (
          <View style={styles.carousel}>
            <List title={'Popular Tv Shows'} content={popularTv} />
          </View>)}
          
          {/* Family Movies */}
          {familyMovies && (
          <View style={styles.carousel}>
            <List title={'Family Movies'} content={familyMovies} />
          </View>)}
          
          {/* Documentary Movies */}
          {documentaryMovies && (
          <View style={styles.carousel}>
            <List title={'Documentary Movies'} content={documentaryMovies} />
          </View>)}
        </ScrollView>
        )}
        {!loaded && (<ActivityIndicator size='large'/>)}
        {error && <Error />}
      </react.Fragment>
    );
}

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderStyle:{
    height: 0
  },
  carousel: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;