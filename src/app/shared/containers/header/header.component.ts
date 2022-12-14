import { FormBuilder } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';
import { I18nService } from 'src/app/modules/i18n/i18n.service';
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
  public language: any = this.store.selectSnapshot(AppState.language) || 'tj';
  public languageLists: any = { ru: 'Русский', en: 'English', tj: 'Тоҷикӣ' };

  public form = this.fb.group({
    search: [null],
  });

  constructor(
    private router: Router,
    private storageService: StorageService,
    private store: Store,
    private i18nService: I18nService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.refreshHeader();
    this.form.valueChanges.subscribe(() => {
      console.log(this.form.value.search);
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public openLanguage() {
    this.isOpenLanguage = !this.isOpenLanguage;
  }

  public openCloseMenuMobile() {
    this.isOpenMenuMobile = !this.isOpenMenuMobile;
    this.isOpenLanguage = false;
  }

  public changeLanguage(lan: string) {
    this.language = lan;
    this.i18nService.useLanguage(lan);
    this.openLanguage();
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
  }
}
