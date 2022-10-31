import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _position = new BehaviorSubject<number>(0);

  constructor() {}

  get position$(): Observable<number> {
    return this._position.asObservable();
  }

  setPositionScroll(position: number): void {
    this._position.next(position);
  }
}
