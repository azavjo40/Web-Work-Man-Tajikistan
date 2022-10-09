import { Injectable } from '@angular/core';
import { Action, StateContext, NgxsOnInit, Selector } from '@ngxs/store';
import { StorageService } from 'src/app/core/services/storage.service';
import { SetUser } from './actions';
import { IOutPutUser } from './types';

@Injectable()
export class AppState implements NgxsOnInit {
  constructor(private storageService: StorageService) {}

  ngxsOnInit(ctx: StateContext<any>): void {
    const user = this.storageService.getUser();
    if (user) {
      ctx.dispatch(new SetUser(user));
    }
  }

  @Selector()
  static user(state: any): IOutPutUser | null {
    return state.user;
  }

  @Action(SetUser)
  public SetUser(ctx: StateContext<any>, action: SetUser): void {
    ctx.patchState({ user: action.user });
  }
}
