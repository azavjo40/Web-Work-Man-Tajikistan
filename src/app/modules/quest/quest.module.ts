import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuestComponent } from './quest.component';
import { QuestRouter } from './quest.router';


@NgModule({
  declarations: [
    ProfileComponent,
    HomeComponent,
    QuestComponent
  ],
  imports: [
    QuestRouter,
    SharedModule
  ],
})
export class QuestModule {}
