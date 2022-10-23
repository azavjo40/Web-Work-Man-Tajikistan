import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './logged.component';
import { AdsComponent } from './pages/ads/ads.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedComponent,
    children: [
      { path: 'create/ads', component: AdsComponent },
      { path: '**', redirectTo: 'logged/ads' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LoggedRouter {}
