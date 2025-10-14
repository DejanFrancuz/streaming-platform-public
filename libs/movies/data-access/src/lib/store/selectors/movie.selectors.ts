import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  MOVIE_FEATURE_KEY, MovieState } from '../reducers/movie.reducer';

// Lookup the 'Movie' feature state managed by NgRx
export const selectMovieState =
  createFeatureSelector<MovieState>(MOVIE_FEATURE_KEY);

export const selectAllMovies = createSelector(
  selectMovieState,
  (state: MovieState) => state.moviesList
);

export const selectMyMovies = createSelector(
  selectMovieState,
  (state: MovieState) => state.myMoviesResult
);

export const selectCartMovies = createSelector(
  selectMovieState,
  (state: MovieState) => state.cartMovies
);

export const selectCartMoviesLenght = createSelector(
  selectMovieState,
  (state: MovieState) => state.cartMovies.length
);

export const selectSelectedMovie = createSelector(
  selectMovieState,
  (state: MovieState) => state.selectedMovie
)

export const selectMoviesLoaded = createSelector(
  selectMovieState,
  (state: MovieState) => state.loading
);

export const selectMovieError = createSelector(
  selectMovieState,
  (state: MovieState) => state.error
);
