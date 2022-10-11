import { ApiService } from 'src/app/core/services/api.service';
import { Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { Store } from '@ngxs/store';
import { SetUser } from './actions';
import { IOutPutAuth, IOutPutUser } from './types';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(
    private store: Store,
    private apiService: ApiService,
    private storageService: StorageService
  ) {}

  public login(data: any): Observable<IOutPutAuth> {
    return this.apiService.post('/login', data).pipe(
      tap((res: IOutPutAuth) => {
        if (res?.access_token) {
          this.storageService.saveToken(res.access_token);
          this.getUser().subscribe();
        } else throw new Error('Invalid access_token...');
      })
    );
  }

  public register(data: any): Observable<IOutPutAuth> {
    return this.apiService.post('/register', data).pipe(
      tap((res: IOutPutAuth) => {
        if (res?.access_token) {
          this.storageService.saveToken(res.access_token);
          this.getUser().subscribe();
        } else throw new Error('Invalid access_token...');
      })
    );
  }

  public getUser(): Observable<IOutPutUser> {
    return this.apiService.get('/profile').pipe(
      tap((data: IOutPutUser) => {
        this.store.dispatch(new SetUser(data));
        this.storageService.saveUser(data);
      })
    );
  }

  public updateUserImage(url: string): Observable<IOutPutUser> {
    return this.apiService.put('/update/user', { image: url }).pipe(
      tap((data: any) => {
        this.getUser().subscribe();
      })
    );
  }

  public createImageLink(images: any): Observable<any> {
    const formdata = new FormData();
    formdata.append('image', images[0]);
    return this.apiService.post('/upload', formdata);
  }

  public getAllAds(): Observable<IOutPutUser> {
    return this.apiService.get('/ads');
  }

  public getAdsById(id: string, isUserId?: boolean): Observable<IOutPutUser> {
    return this.apiService.get(`/ads/${isUserId ? 'user/' + id : id}`);
  }

  public postAds(data: any): Observable<IOutPutUser> {
    return this.apiService.post('/ads', data);
  }

  public putAds(data: any): Observable<IOutPutUser> {
    return this.apiService.put('/ads', data);
  }

  public deleteAds(): Observable<IOutPutUser> {
    return this.apiService.delete('/ads');
  }
}
