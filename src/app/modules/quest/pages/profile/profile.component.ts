import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
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
  @ViewChild('modalImages') modalImages!: ModalComponent;
  @ViewChild('modalAvatar') modalAvatar!: ModalComponent;
  public workerMan!: any;
  public avatar: string = 'assets/icons/avatar-user.png';
  public apiUrl: string = environment.apiUrl;
  public user!: any;
  public queryParams: any = this.route.snapshot.queryParams;
  public isLoading: boolean = false;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
    private store: Store,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.user = this.store.selectSnapshot(AppState.user);
    this.getadsById();
  }

  public openModalAvatar() {
    this.modalAvatar.open();
  }

  public openModalImages() {
    this.modalImages.open();
  }

  public getadsById() {
    this.isLoading = true;
    this.appService
      .getAdsById(this.queryParams?.profileId, this.queryParams?.isIntegrtion)
      .subscribe(
        (item: IAdsApi) => {
          this.workerMan = item;
          this.titleService.setTitle(item?.user?.name);
          this.isLoading = false;
        },
        () => (this.isLoading = false)
      );
  }

  public uploadImage(event: any) {
    this.appService
      .createImageLink(event.target.files)
      .subscribe((item: any) => {
        this.appService.updateUserImage(item.url).subscribe();
        this.getadsById();
      });
  }
}
