import { Injectable } from '@angular/core';
import { Action, StateContext, NgxsOnInit, Selector } from '@ngxs/store';
import { StorageService } from 'src/app/core/services/storage.service';
import { SetLanguage, SetUser } from './actions';
import { IOutPutUser } from './types';

@Injectable()
export class AppState implements NgxsOnInit {
  constructor(private storageService: StorageService) {}

  ngxsOnInit(ctx: StateContext<any>): void {
    const language = this.storageService.getLanguage();
    if (language) {
      ctx.dispatch(new SetLanguage(language));
    }

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

  @Selector()
  static language(state: any): IOutPutUser | null {
    return state.language;
  }

  @Action(SetLanguage)
  public SetLanguage(ctx: StateContext<any>, action: SetLanguage): void {
    this.storageService.saveLanguage(action.language);
    ctx.patchState({ language: action.language });
  }
}
