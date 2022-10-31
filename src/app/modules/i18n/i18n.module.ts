import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';
import { I18nService } from './i18n.service';

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'tj',
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
  providers: [I18nService],
})
export class I18nModule {
  constructor(private i18nService: I18nService) {
    this.i18nService.initLanguage();
  }
}

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    environment.frontendUrl + '/assets/i18n/',
    '.json'
  );
}
