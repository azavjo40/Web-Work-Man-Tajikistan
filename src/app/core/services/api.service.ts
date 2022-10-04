import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ContextOptions } from '@ngneat/cashew/lib/cache-context';
import { withCache } from '@ngneat/cashew';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(
    path: string,
    params?: Record<string, any>,
    cashewOptions: ContextOptions = { cache: false }
  ): Observable<any> {
    return this.http.request('get', environment.apiUrl + path, {
      context: withCache(cashewOptions),
    });
  }

  public post(path: string, body?: Record<string, any>): Observable<any> {
    return this.http.request('post', environment.apiUrl + path, { body });
  }

  public put(path: string, body?: Record<string, any>): Observable<any> {
    return this.http.request('put', environment.apiUrl + path, { body });
  }

  public patch(path: string, body?: Record<string, any>): Observable<any> {
    return this.http.request('patch', environment.apiUrl + path, { body });
  }

  public delete(path: string, params?: Record<string, any>): Observable<any> {
    return this.http.request('delete', environment.apiUrl + path);
  }

  public upload(path: string, file: File): Observable<HttpEvent<any>> {
    return this.http.request('post', environment.apiUrl + path, {
      body: file,
      reportProgress: true,
      observe: 'events',
      headers: { 'Content-Type': file.type },
    });
  }
}
