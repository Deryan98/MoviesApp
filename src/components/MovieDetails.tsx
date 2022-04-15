/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, FlatList} from 'react-native';
import currencyFormatter from 'currency-formatter';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {CastItem} from './CastItem';
import {HorizontalSlider} from './HorizontalSlider';
import {MovieRecomm} from '../interfaces/RecommendedInterface';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
  recommended: MovieRecomm[];
}

export const MovieDetails = ({movieFull, cast, recommended}: Props) => {
  return (
    <>
      {/* Detalles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />

          <Text style={{color: 'black'}}>{movieFull.vote_average}</Text>

          <Text style={{marginLeft: 5, color: 'black'}}>
            - {movieFull.genres.map(genre => genre.name).join(', ')}
          </Text>
        </View>

        {/* Historia */}

        <Text
          style={{
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Historia
        </Text>

        <Text style={{fontSize: 16, color: 'black'}}>{movieFull.overview}</Text>

        {/* Presupuesto */}

        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Presupuesto
        </Text>

        <Text style={{fontSize: 18, color: 'black'}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>

      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
            color: 'black',
          }}>
          Actores
        </Text>

        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 80}}
        />
        <HorizontalSlider title="Suggested" movies={recommended} />
      </View>
    </>
  );
};
