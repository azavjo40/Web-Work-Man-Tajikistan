import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription$: Subscription = new Subscription();
  public isLoginPage: boolean = true;
  public isLogged: boolean = false;
  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    this.isLogged = !!this.storageService.getToken();
    this.subscription$.add(
      this.router.events.subscribe(() => {
        this.isLogged = !!this.storageService.getToken();
        this.isLoginPage = this.router.url.includes('login');
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public logOut() {
    this.storageService.removeToken();
    this.isLogged = !!this.storageService.getToken();
  }
}
