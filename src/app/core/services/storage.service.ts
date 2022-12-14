import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetUser } from 'src/app/stores/app/actions';
import { AppState } from 'src/app/stores/app/state';

export const TOKEN = 'TOKEN';
export const USER = 'USER';
export const LANGUAGE = 'LANGUAGE';

@Injectable({ providedIn: 'root' })
export class StorageService {
  public language: any = this.store.selectSnapshot(AppState.language);
  constructor(private router: Router, private store: Store) {}

  public saveToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN) as string;
  }

  public removeToken(): void {
    localStorage.removeItem(TOKEN);
  }

  public saveUser(user: any): void {
    localStorage.setItem(USER, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem(USER) as string);
  }

  public removeUser(): void {
    localStorage.removeItem(USER);
  }

  public saveLanguage(user: any): void {
    localStorage.setItem(LANGUAGE, JSON.stringify(user));
  }

  public getLanguage(): any {
    return JSON.parse(localStorage.getItem(LANGUAGE) as string);
  }

  public logOut(): void {
    this.removeToken();
    this.removeUser();
    this.store.dispatch(new SetUser(null));
    this.router.navigateByUrl('/guest/home');
  }
}
