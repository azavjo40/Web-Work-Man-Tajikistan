import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { AppService } from 'src/app/stores/app/service';
import { AppState } from 'src/app/stores/app/state';
import { IAdsApi } from 'src/app/stores/app/types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public workerMan!: any;
  public avatar: string = 'assets/icons/avatar-user.png';
  public apiUrl: string = environment.apiUrl;
  public user!: any;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.user = this.store.selectSnapshot(AppState.user);
    this.getadsById();
  }

  public getadsById() {
    this.appService
      .getAdsById(this.route?.snapshot?.params['id'].split('-')[1])
      .subscribe((item: IAdsApi) => {
        this.workerMan = item;
      });
  }

  public uploadImage(event: any) {
    this.appService
      .createImageLink(event.target.files)
      .subscribe((item: any) => {
        this.appService.updateUserImage(item.url).subscribe();
        this.getadsById();
      });
  }

  public spliceImage(images: any) {
    return [...images]?.splice(0, 3);
  }
}
