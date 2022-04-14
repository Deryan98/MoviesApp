import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {
  Movie,
  MovieDBMoviesResponse,
  SearchMovies,
} from '../interfaces/movieInterface';

interface MoviesState {
  searchMovie: Movie[];
}

export const useMovieSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    searchMovie: [],
  });

  const getSearchResult = async () => {
    const prefix = '/search';
    const resp = await movieDB.get<MovieDBMoviesResponse>(`${prefix}/movie`);
    setMoviesState({
      searchMovie: resp.data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getSearchResult();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
