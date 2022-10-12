import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouter } from './app.router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainInterceptor } from './core/interceptors/main.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotToastModule } from '@ngneat/hot-toast';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './stores/app/state';
import { environment } from 'src/environments/environment';
import { I18nModule } from './i18n/i18n.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRouter,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HotToastModule.forRoot({ position: 'bottom-center' }),
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production,
    }),
    I18nModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MainInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
