import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const prefix = '/movie';
    const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>(
      `${prefix}/now_playing`,
    );
    const popularPromise = movieDB.get<MovieDBMoviesResponse>(
      `${prefix}/popular`,
    );
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>(
      `${prefix}/top_rated`,
    );
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>(
      `${prefix}/upcoming`,
    );

    const resps = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);
    setMoviesState({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      topRated: resps[2].data.results,
      upcoming: resps[3].data.results,
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
