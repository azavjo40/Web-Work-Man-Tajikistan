import { NgModule } from '@angular/core';
import { I18nModule } from 'src/app/modules/i18n/i18n.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuestComponent } from './quest.component';
import { QuestRouter } from './quest.router';

@NgModule({
  declarations: [ProfileComponent, HomeComponent, QuestComponent],
  imports: [QuestRouter, SharedModule, I18nModule],
})
export class QuestModule {}
