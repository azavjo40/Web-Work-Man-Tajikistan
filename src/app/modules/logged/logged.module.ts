import { NgModule } from '@angular/core';
import { LoggedRouter } from 'src/app/modules/logged/logged.router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [HomeComponent, ProfileComponent],
  imports: [LoggedRouter, SharedModule],
})
export class LoggedModule {}
