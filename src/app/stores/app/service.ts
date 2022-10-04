import { StorageService } from 'src/app/core/services/storage.service';
import { ApiService } from 'src/app/core/services/api.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AppService {
  constructor(
    private apiService: ApiService,
    private storageService: StorageService
  ) {}

  public login(data: any): Observable<any> {
    return this.apiService.post('/register', data);
  }

  public newPassword(data: any): Observable<any> {
    return this.apiService.post('/new-password', data);
  }

  public resetPassword(data: any): Observable<any> {
    return this.apiService.post('/reset-password', data);
  }

  public changePassword(data: any): Observable<any> {
    return this.apiService.post('/change-password', data);
  }
}
