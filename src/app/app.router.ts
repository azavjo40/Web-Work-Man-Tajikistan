import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoggedGuard } from './core/guards/logged.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'logged',
    loadChildren: () =>
      import('./modules/logged/logged.module').then((m) => m.LoggedModule),
    canActivate: [LoggedGuard],
  },
  {
    path: 'guest',
    loadChildren: () =>
      import('./modules/quest/quest.module').then((m) => m.QuestModule),
  },
  { path: '**', redirectTo: 'guest/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
  providers: [LoggedGuard, AuthGuard],
})
export class AppRouter {}
