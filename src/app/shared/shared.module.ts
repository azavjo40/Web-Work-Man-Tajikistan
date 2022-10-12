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
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ChipsAutocomplete } from './components/chips-autocomplete/chips-autocomplete.component';
import { I18nModule } from '../i18n/i18n.module';

const components: any = [
  ButtonComponent,
  HeaderComponent,
  ModalComponent,
  SwiperExampleComponent,
  ButtonComponent,
  InputTextComponent,
  InputErrorsComponent,
  LogoComponent,
  ChipsAutocomplete,
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
  MatChipsModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatIconModule,
  MatSelectModule,
  I18nModule,
];

@NgModule({
  declarations: [components, modals, pipes, directives],
  imports: [modules],
  exports: [modules, components, modals, pipes, directives],
})
export class SharedModule {}
