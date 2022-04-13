/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieInterface';
import {MoviePoster} from './MoviePoster';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View
      style={{
        height: title ? windowHeight * 0.35 : windowHeight * 0.28,
      }}>
      {title && (
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 10,
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
