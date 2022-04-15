import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/creditsInterface';
import {
  MovieRecomm,
  RecommendedResponse,
} from '../interfaces/RecommendedInterface';
import {MovieFull} from '../interfaces/movieInterface';

interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
  recommended: MovieRecomm[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
    recommended: [],
  });

  const prefix = '/movie';
  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`${prefix}/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(
      `${prefix}/${movieId}/credits`,
    );
    const recommendedPromise = movieDB.get<RecommendedResponse>(
      `${prefix}/${movieId}/recommendations`,
    );

    const [movieDetailsResp, castPromiseResp, recommendedPromiseResp] =
      await Promise.all([movieDetailsPromise, castPromise, recommendedPromise]);

    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast,
      recommended: recommendedPromiseResp.data.results,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...state,
  };
};
