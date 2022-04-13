import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setPeliculasEnCine(resp.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);

  return {
    peliculasEnCine,
    isLoading,
  };
};
