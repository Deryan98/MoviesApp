import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {VerticalSlider} from '../components/VerticalSlider';

import {useMoviesSearch} from '../hooks/useMovieSearch';

const SearchScreen = () => {
  const {moviesSearch, isLoading} = useMoviesSearch();

  const route = useRoute();
  const query = route.params;

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <VerticalSlider
          title={query && query.toString()}
          movies={moviesSearch}
          horizontal={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default SearchScreen;
