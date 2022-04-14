/* eslint-disable react-native/no-inline-styles */
// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, View, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import {HorizontalSlider} from '../components/HorizontalSlider';

import {MoviePoster} from '../components/MoviePoster';
import {useMovieSearch} from '../hooks/useMovieSearch';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const SearchScreen = () => {
  const {searchMovie, isLoading} = useMovieSearch();

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
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        {/* Carosel Principal
        <View style={{height: windowHeight / 2}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={200}
            inactiveSlideOpacity={0.9}
          />
        </View> */}
        <HorizontalSlider
          title="Popular"
          movies={searchMovie}
          horizontal={false}
        />
        ]
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
