import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthorizationRouter } from 'src/app/modules/authorization/authorization.router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [AuthorizationRouter, SharedModule],
  providers: [],
})
export class AuthorizationModule {}
