import { Injectable, inject } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as MovieActions from '../actions/movie.actions';
import * as MovieSelectors from '../selectors/movie.selectors';
import { MovieFilter, MovieItem } from '../../models/Movie';
import { PageQuery } from '@stream-platform/types';

@Injectable({ providedIn: 'root' })
export class MovieFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  selectLoaded$ = this.store.pipe(select(MovieSelectors.selectMoviesLoaded));
  selectMovies$ = this.store.pipe(select(MovieSelectors.selectAllMovies));
  selectMyMovies$ = this.store.pipe(select(MovieSelectors.selectMyMovies));
  selectCartMovies$ = this.store.pipe(select(MovieSelectors.selectCartMovies));
  selectCartMoviesLenght$ = this.store.pipe(select(MovieSelectors.selectCartMoviesLenght));
  selectMovie$ = this.store.pipe(select(MovieSelectors.selectSelectedMovie));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  getMovies(pageQuery: PageQuery, filter?: MovieFilter){
    this.store.dispatch(MovieActions.getMovies({pageQuery, filter}));
  }
  getMyMovies(pageQuery: PageQuery, filter?: MovieFilter){
    this.store.dispatch(MovieActions.getMyMovies({pageQuery, filter}));
  }

  getMovieById(movieId: number){
    this.store.dispatch(MovieActions.getMovieById({movieId}));
  }

  addMovie(movie: MovieItem){
    this.store.dispatch(MovieActions.addMovie({ movie }));
  }

  addMovieForPerson(movieIds: number[]){
    this.store.dispatch(MovieActions.addMovieForPerson({ movieIds }));
  }

  likeMovieForPerson(movieId: number){
    this.store.dispatch(MovieActions.likeMovieForPerson({ movieId }));
  }

  addCartMovie(movie: MovieItem){
    this.store.dispatch(MovieActions.addMovieToCart({ movie }));
  }

  removeCartMovie(movieId: number){
    this.store.dispatch(MovieActions.removeMovieFromCart({ movieId }));
  }

  clearShoppingCart(){
    this.store.dispatch(MovieActions.clearShoppingCart());
  }

  updateMovie(movie: MovieItem){
    this.store.dispatch(MovieActions.updateMovie({ movie }));
  }

  deleteMovie(movieId: number){
    this.store.dispatch(MovieActions.deleteMovie({ movieId }));
  }
}
