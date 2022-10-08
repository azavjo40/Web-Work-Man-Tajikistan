import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './logged.component';
import { HomeComponent } from './pages/home/home.component';
import { PageCvComponent } from './pages/page-cv/page-cv.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'create-page-cv', component: PageCvComponent },
      { path: 'profile/:id', component: ProfileComponent },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LoggedRouter {}
