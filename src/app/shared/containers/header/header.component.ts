import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subscription$: Subscription = new Subscription();
  public isLoginPage: boolean = true;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription$.add(
      this.router.events.subscribe(
        () => (this.isLoginPage = this.router.url.includes('login'))
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
