import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable()
export class LoggedGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageService) {}

  public canActivate(): boolean {
    return true;
    // const token: string = this.storageService.getToken();
    // const user: any = this.storageService.getUser();
    // if (token && user) return true;
    // this.router.navigateByUrl('/authorization/login');
    // return false;
  }
}
