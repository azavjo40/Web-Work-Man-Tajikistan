import { NgModule } from '@angular/core';
import { LoggedRouter } from 'src/app/modules/logged/logged.router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoggedComponent } from './logged.component';
import { HomeComponent } from './pages/home/home.component';
import { PageCvComponent } from './pages/page-cv/page-cv.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatChipsModule } from '@angular/material/chips';
import { ChipsAutocomplete } from './components/chips-autocomplete/chips-autocomplete.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    LoggedComponent,
    PageCvComponent,
    ChipsAutocomplete,
  ],
  imports: [
    LoggedRouter,
    SharedModule,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSelectModule,
  ],
})
export class LoggedModule {}
