import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';
import { AppState } from 'src/app/stores/app/state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Select(AppState) user$!: Observable<any>;
  private subscription$: Subscription = new Subscription();
  public isLoginPage: boolean = true;
  public isLogged: boolean = false;
  public isOpenMenuMobile: boolean = false;
  public isOpenLanguage: boolean = false;

  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    this.subscription$.add(
      this.user$.subscribe((item: any) => (this.isLogged = !!item?.user))
    );
    this.subscription$.add(
      this.router.events.subscribe(() => {
        this.isLoginPage = this.router.url.includes('login');
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public logOut() {
    this.storageService.logOut();
    this.router.navigate(['/quest/home']);
  }
}
