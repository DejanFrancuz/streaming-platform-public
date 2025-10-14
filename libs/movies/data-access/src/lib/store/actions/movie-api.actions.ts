import { createAction, props } from '@ngrx/store';
import { MovieItem } from '../../models/Movie';
import { PageEntity } from '@stream-platform/types';

export const getMoviesSuccess = createAction('[Movie/API] Get Movies Success', props<{ moviesList: PageEntity<MovieItem>}>());
export const getMoviesFail = createAction('[Movie/API] Get Movies Fail', props<{ error: string}>());

export const getMyMoviesSuccess = createAction('[Movie/API] Get My Movies Success', props<{ moviesList: PageEntity<MovieItem>}>());
export const getMyMoviesFail = createAction('[Movie/API] Get My Movies Fail', props<{ error: string}>());

export const getMovieByIdSuccess = createAction('[Movie/API] Get Movie by Id Success', props<{ movie: MovieItem }>());
export const getMovieByIdFail = createAction('[Movie/API] Get Movie by Id Fail', props<{ error: string}>());

export const updateMovieSuccess = createAction('[Movie/API] Update Movie Success');
export const updateMovieFail = createAction('[Movie/API] Update Movie Fail', props<{ error: string}>());

export const addMovieSuccess = createAction('[Movie/API] Add Movie Success');
export const addMovieFail = createAction('[Movie/API] Add Movie Fail', props<{ error: string}>());

export const addMovieForPersonSuccess = createAction('[Movie/API] Add Movie For Person Success');
export const addMovieForPersonFail = createAction('[Movie/API] Add Movie For Person Fail', props<{ error: string}>());

export const likeMovieForPersonSuccess = createAction('[Movie/API] Like Movie For Person Success');
export const likeMovieForPersonFail = createAction('[Movie/API] Like Movie For Person Fail', props<{ error: string}>());

export const deleteMovieSuccess = createAction('[Movie/API] Delete Movie Success');
export const deleteMovieFail = createAction('[Movie/API] Delete Movie Fail', props<{ error: string}>());
