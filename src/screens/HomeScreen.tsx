import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {HeaderBar} from '../components/HeaderBar';
import {HorizontalSlider} from '../components/HorizontalSlider';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  const [query, setQuery] = React.useState('');

  const handleKeyPress = (val: React.SetStateAction<string>) => {
    setQuery(val);
  };

  const triggerQuery = () => {
    navigation.push('SearchScreen', query);
    setQuery('');
    return;
  };

  if (isLoading) {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <HeaderBar
        query={query}
        handleKeyPress={handleKeyPress}
        triggerQuery={triggerQuery}
      />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{marginTop: 30}}>
        {/* Carosel Principal */}
        <View style={{height: windowHeight * 0.45}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={200}
            inactiveSlideOpacity={0.9}
            firstItem={1}
          />
        </View>
        <HorizontalSlider title="Popular" movies={popular} />
        <HorizontalSlider title="Top Rated" movies={topRated} />
        <HorizontalSlider title="Upcoming" movies={upcoming} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  nowPlayingTitle: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 10,
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
