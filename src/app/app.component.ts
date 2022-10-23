import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { I18nService } from './modules/i18n/i18n.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private i18nService: I18nService, private router: Router) {}
  ngOnInit(): void {
    this.i18nService.initLanguage();
  }
}
