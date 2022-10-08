import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuestComponent } from './quest.component';

const routes: Routes = [
  {
    path: '',
    component: QuestComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: '**', redirectTo: 'guest/home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class QuestRouter {}
