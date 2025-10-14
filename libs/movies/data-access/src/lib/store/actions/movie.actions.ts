import { createAction, props } from '@ngrx/store';
import { MovieFilter, MovieItem } from '../../models/Movie';
import { PageQuery } from '@stream-platform/types';

// export const initMovie = createAction('[Movie] Init');

export const getMovies = createAction('[Movie] Get Movies',  props<{ pageQuery: PageQuery, filter?: MovieFilter}>());

export const getMyMovies = createAction('[Movie] Get MyMovies', props<{ pageQuery: PageQuery, filter?: MovieFilter}>());

export const getMovieById = createAction('[Movie] Get Movie by Id', props<{ movieId: number }>());

export const updateMovie = createAction('[Movie] Update Movie',  props<{ movie: MovieItem }>());

export const addMovie = createAction('[Movie] Add Movie',  props<{ movie: MovieItem }>());

export const addMovieToCart = createAction('[Movie] Add Movie To Cart',  props<{ movie: MovieItem }>());

export const removeMovieFromCart = createAction('[Movie] Remove Movie From Cart',  props<{ movieId: number }>());

export const clearShoppingCart = createAction('[Movie] Clear Shopping Cart');

export const addMovieForPerson = createAction('[Movie] Add Movie For Person',  props<{ movieIds: number[] }>());

export const likeMovieForPerson = createAction('[Movie] Like Movie For Person',  props<{ movieId: number }>());

export const deleteMovie = createAction('[Movie] Delete Movie',  props<{ movieId: number }>());
