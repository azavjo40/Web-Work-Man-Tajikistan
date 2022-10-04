import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  constructor(private toast: HotToastService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((err) => {
        if (err?.status > 500) this.toast.error('Internal server error');
        return throwError(err);
      }),
    );
  }
}
