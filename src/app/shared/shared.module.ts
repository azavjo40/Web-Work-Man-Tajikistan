import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { HeaderComponent } from './containers/header/header.component';
import { SwiperModule } from 'swiper/angular';
import { SwiperExampleComponent } from './components/swiper-example/swiper-example.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputErrorsComponent } from './components/input-errors/input-errors.component';
import { LogoComponent } from './containers/logo/logo.component';

const components: any = [
  ButtonComponent,
  HeaderComponent,
  ModalComponent,
  SwiperExampleComponent,
  ButtonComponent,
  InputTextComponent,
  InputErrorsComponent,
  LogoComponent,
];

const modals: any = [HeaderComponent];

const pipes: any = [];

const directives: any = [];

const modules: any = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  SwiperModule,
];

@NgModule({
  declarations: [components, modals, pipes, directives],
  imports: [modules],
  exports: [modules, components, modals, pipes, directives],
})
export class SharedModule {}
