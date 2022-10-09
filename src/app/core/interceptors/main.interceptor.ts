import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HotToastService } from '@ngneat/hot-toast';
import { StorageService } from '../services/storage.service';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  constructor(
    private toast: HotToastService,
    private storageService: StorageService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers: any = {};
    const token: string = this.storageService.getToken();
    if (token) headers['Authorization'] = 'Bearer ' + token;
    const authReq = req.clone({ headers: new HttpHeaders(headers) });

    return next.handle(authReq).pipe(
      map((event: any) => {
        if (event?.body?.message) this.toast.info(event?.body?.message);
        return event;
      }),

      catchError((err) => {
        if (err?.status > 500) this.toast.error('Internal server error');
        if (err?.status >= 400 && err?.status < 500)
          this.toast.error(err.error.message);
        return throwError(err);
      })
    );
  }
}
