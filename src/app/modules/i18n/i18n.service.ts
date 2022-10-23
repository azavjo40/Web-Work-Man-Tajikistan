import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { SetLanguage } from '../../stores/app/actions';
import { AppState } from '../../stores/app/state';

@Injectable({ providedIn: 'root' })
export class I18nService {
  constructor(private translate: TranslateService, private store: Store) {}

  public initLanguage() {
    const language: any = this.store.selectSnapshot(AppState.language);
    this.translate.addLangs(['ru', 'en', 'tj']);
    if (language) this.translate.use(language ? language : 'tj');
  }

  public useLanguage(lan: string, isUpdate = true) {
    this.translate.use(lan);
    this.store.dispatch(new SetLanguage(lan));
    if (window && isUpdate) window.location.reload();
  }
}
