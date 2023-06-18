
import React, { useContext } from 'react';
import {
  ActivityIndicator,
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
  ToastAndroid,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import {HeaderBar} from '../components/HeaderBar';
import {HorizontalSlider} from '../components/HorizontalSlider';

import {MoviePoster} from '../components/MoviePoster';
import {useMovies} from '../hooks/useMovies';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthCotext/AuthContext';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const HomeScreen = ({navigation}:{navigation: any}) => {

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();

  const [query, setQuery] = React.useState('');

  const handleKeyPress = (val: React.SetStateAction<string>) => {
    setQuery(val);
  };

  const triggerQuery = () => {
    if (query) {
      navigation.push('SearchScreen', query);
    } else {
      ToastAndroid.showWithGravity(
        'Type a text before searching',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
    return;
  };

  if (isLoading) {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  const { setNotAuthenticated } = useContext(AuthContext);
  const logOut = () => {
    AsyncStorage.removeItem('@token',() => setNotAuthenticated());
  }

  return (
    <ScrollView>
      <HeaderBar
        handleKeyPress={handleKeyPress}
        triggerQuery={triggerQuery}
        handleLogOut={logOut}
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
