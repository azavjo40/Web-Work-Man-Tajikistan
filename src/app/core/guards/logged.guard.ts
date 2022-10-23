import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable()
export class LoggedGuard implements CanActivate {
  constructor(private router: Router, private storageService: StorageService) {}

  public canActivate(): boolean {
    const token = this.storageService.getToken();
    if (!token) {
      this.router.navigateByUrl('/guest/home');
      return false;
    }
    return true;
  }
}
