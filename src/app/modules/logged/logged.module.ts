import { NgModule } from '@angular/core';
import { LoggedRouter } from 'src/app/modules/logged/logged.router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoggedComponent } from './logged.component';
import { AdsComponent } from './pages/ads/ads.component';

@NgModule({
  declarations: [LoggedComponent, AdsComponent],
  imports: [LoggedRouter, SharedModule],
})
export class LoggedModule {}
