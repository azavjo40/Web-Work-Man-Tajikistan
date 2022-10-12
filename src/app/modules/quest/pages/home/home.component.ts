import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/stores/app/service';
import { IAdsApi } from 'src/app/stores/app/types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public avatar: string = 'assets/icons/avatar-user.png';
  public workersMan: Array<IAdsApi> = [];
  public user!: any;
  public apiUrl: string = environment.apiUrl;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getAllAds();
  }

  public getAllAds() {
    this.appService.getAllAds().subscribe((items: Array<IAdsApi>) => {
      this.workersMan = items;
    });
  }
}
