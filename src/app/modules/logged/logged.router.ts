import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedComponent } from './logged.component';
import { PageCvComponent } from './pages/page-cv/page-cv.component';

const routes: Routes = [
  {
    path: '',
    component: LoggedComponent,
    children: [
      { path: 'create/page', component: PageCvComponent },
      { path: '**', redirectTo: 'logged/page' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class LoggedRouter {}
