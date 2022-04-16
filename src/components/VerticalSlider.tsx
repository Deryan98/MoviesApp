/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieInterface';
import {MoviePoster} from './MoviePoster';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors';
import {useNavigation} from '@react-navigation/native';

const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

interface Props {
  title?: string;
  movies: Movie[];
  horizontal?: boolean;
}

export const VerticalSlider = ({title, movies, horizontal = true}: Props) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        height: title ? windowHeight : windowHeight * 0.28,
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        {title && (
          <>
            <Icon
              name="arrow-back"
              backgroundColor={Colors.accentColor}
              onPress={() => {
                // console.log({query});
                return navigation.pop();
              }}
              size={40}
              color={Colors.primayColor}
              iconStyle={{
                borderRadius: 30,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 30,
                fontWeight: 'bold',
                marginLeft: 10,
                marginBottom: 20,
              }}>
              {title}
            </Text>
          </>
        )}
      </View>
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
