import { Injectable } from '@angular/core';

export const TOKEN = 'TOKEN';
export const USER = 'USER';

@Injectable({ providedIn: 'root' })
export class StorageService {
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
}
