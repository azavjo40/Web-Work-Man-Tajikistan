import { Component, OnInit } from '@angular/core';
import { I18nService } from './modules/i18n/i18n.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private i18nService: I18nService) {}
  ngOnInit(): void {
    this.i18nService.initLanguage();
  }
}
