import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUser from './store/reducers/user.reducer';
import { UserEffects } from './store/effects/user.effects';
import { UserFacade } from './store/facade/user.facade';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule,
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [UserFacade],
})
export class UsersDataAccessModule {}
