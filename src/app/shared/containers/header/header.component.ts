import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Select } from '@ngxs/store';
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
  public language!: any;
  public languageLists: any = { ru: 'Русский', en: 'English', tj: 'Тоҷикӣ' };

  constructor(
    private router: Router,
    private storageService: StorageService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.language = 'tj';
    this.refreshHeader();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public changeLanguage(lan: string) {
    this.language = lan;
    this.translate.use(lan);
  }

  public refreshHeader() {
    this.subscription$.add(
      this.user$.subscribe((item: any) => (this.isLogged = !!item?.user))
    );
    this.subscription$.add(
      this.router.events.subscribe(() => {
        this.isLoginPage = this.router.url.includes('login');
      })
    );
  }

  public logOut() {
    this.storageService.logOut();
    this.router.navigate(['/quest/home']);
  }
}
