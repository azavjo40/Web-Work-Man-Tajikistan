import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { Store } from '@ngxs/store';
import { AppState } from '../stores/app/state';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
export class I18nModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'ru', 'tj']);
  }
}

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    environment.frontendUrl + '/assets/i18n/',
    '.json'
  );
}
