/* eslint-disable react-native/no-inline-styles */
// import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, View, Dimensions, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {VerticalSlider} from '../components/VerticalSlider';

import {useMoviesSearch} from '../hooks/useMovieSearch';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const SearchScreen = () => {
  const {moviesSearch, isLoading} = useMoviesSearch();

  const route = useRoute();
  const query = route.params;

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
        <VerticalSlider
          title={query}
          movies={moviesSearch}
          horizontal={false}
        />
      </View>
    </ScrollView>
  );
};

export default SearchScreen;
