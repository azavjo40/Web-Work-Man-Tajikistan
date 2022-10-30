import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorizationRouter } from 'src/app/modules/authorization/authorization.router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthorizationComponent } from './authorization.component';
import { I18nModule } from 'src/app/modules/i18n/i18n.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuthorizationComponent],
  imports: [AuthorizationRouter, SharedModule, I18nModule],
  providers: [],
  exports: [LoginComponent],
})
export class AuthorizationModule {}
