import { NgModule } from '@angular/core';
import { LoggedRouter } from 'src/app/modules/logged/logged.router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoggedComponent } from './logged.component';
import { PageCvComponent } from './pages/page-cv/page-cv.component';

@NgModule({
  declarations: [
    LoggedComponent,
    PageCvComponent
  ],
  imports: [
    LoggedRouter,
    SharedModule,
  ],
})
export class LoggedModule {}
