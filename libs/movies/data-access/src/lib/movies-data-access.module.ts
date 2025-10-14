import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMovie from './store/reducers/movie.reducer';
import { MovieEffects } from './store/effects/movie.effects';
import { MovieFacade } from './store/facade/movie.facade';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMovie.MOVIE_FEATURE_KEY, fromMovie.userReducer),
    ToastrModule,
    EffectsModule.forFeature([MovieEffects]),
  ],
  providers: [MovieFacade],
})
export class MoviesDataAccessModule {}
