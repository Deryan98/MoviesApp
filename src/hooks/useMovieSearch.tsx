import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ToastAndroid} from 'react-native';

interface MoviesSearchState {
  moviesSearch: Movie[];
}

export const useMoviesSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const prefix = '/search';
  const route = useRoute();
  const navigation = useNavigation();
  const query = route.params;

  const [moviesSearchState, setMoviesSearchState] = useState<MoviesSearchState>(
    {
      moviesSearch: [],
    },
  );

  const getSearchResult = async () => {
    try {
      const resp = await movieDB.get<MovieDBMoviesResponse>(
        `${prefix}/movie?query=${query}`,
      );
      setMoviesSearchState({
        moviesSearch: resp.data.results,
      });
      setIsLoading(false);
    } catch (error) {
      navigation.pop();
      ToastAndroid.showWithGravity(
        'No movies found, Plese try another text',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  };

  useEffect(() => {
    getSearchResult(query);
  }, []);

  return {
    ...moviesSearchState,
    isLoading,
  };
};
