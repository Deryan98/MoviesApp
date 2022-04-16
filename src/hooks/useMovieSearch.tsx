import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';
import {useRoute} from '@react-navigation/native';

interface MoviesSearchState {
  moviesSearch: Movie[];
}

export const useMoviesSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const prefix = '/search';
  const route = useRoute();
  const query = route.params;

  const [moviesSearchState, setMoviesSearchState] = useState<MoviesSearchState>(
    {
      moviesSearch: [],
    },
  );

  const getSearchResult = async () => {
    console.log('DESDE getSearchResult');
    console.log({query});
    console.log(`${prefix}/movie?${query}`);
    const resp = await movieDB.get<MovieDBMoviesResponse>(
      `${prefix}/movie?query=${query}`,
    );
    setMoviesSearchState({
      moviesSearch: resp.data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getSearchResult(query);
  }, []);

  return {
    ...moviesSearchState,
    isLoading,
  };
};
