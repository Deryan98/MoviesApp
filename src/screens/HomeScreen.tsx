/* eslint-disable react-native/no-inline-styles */
// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, View, Text, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {peliculasEnCine, isLoading} = useMovies();

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <View style={{marginTop: top + 20}}>
      {/* Carosel Principal */}
      <View style={{height: 440}}>
        <Carousel
          data={peliculasEnCine}
          renderItem={({item}: any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={200}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
