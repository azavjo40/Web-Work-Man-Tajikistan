import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { AppState } from './stores/app/state';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService, private store: Store) {}
  ngOnInit(): void {
    const language: any = this.store.selectSnapshot(AppState.language);
    this.translate.use(language ? language : 'tj');
  }
}
