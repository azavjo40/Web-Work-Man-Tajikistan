import { AuthorizationModule } from './../authorization/authorization.module';
import { NgModule } from '@angular/core';
import { I18nModule } from 'src/app/modules/i18n/i18n.module';
import { LoggedRouter } from 'src/app/modules/logged/logged.router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoggedComponent } from './logged.component';
import { AdsComponent } from './pages/ads/ads.component';

@NgModule({
  declarations: [LoggedComponent, AdsComponent],
  imports: [LoggedRouter, SharedModule, I18nModule, AuthorizationModule],
})
export class LoggedModule {}
