import { AppState } from 'src/app/stores/app/state';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { AppService } from 'src/app/stores/app/service';
import { IAdsApi } from 'src/app/stores/app/types';
import { environment } from 'src/environments/environment';
import { SetAds } from 'src/app/stores/app/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription$: Subscription = new Subscription();
  public avatar: string = 'assets/icons/avatar-user.png';
  public workersMan: Array<IAdsApi> = [];
  public user!: any;
  public apiUrl: string = environment.apiUrl;
  public total = 0;

  public form = this.fb.group({
    page: 1,
    perPage: 10,
  });

  constructor(
    private appService: AppService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.refreshAds();
    this.subscription$.add(
      this.form.valueChanges.subscribe(() => this.getAllAds())
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public refreshAds() {
    const adsStor = this.store.selectSnapshot(AppState.ads);
    if (!adsStor?.page) {
      this.getAllAds();
    } else {
      this.workersMan = [...adsStor.data];
      this.form.get('page')?.setValue(adsStor.page, { emitEvent: false });
    }
  }

  public getAllAds() {
    this.appService.getAllAds(this.form.value).subscribe((items: any) => {
      this.total = items?.total;
      this.workersMan = [...this.workersMan, ...items?.data];
      this.store.dispatch(
        new SetAds({ data: this.workersMan, page: this.form.value?.page })
      );
      this.cdr.detectChanges();
    });
  }

  public onScroll(event: any) {
    const tracker = event.target;
    const limit = tracker.scrollHeight - tracker.clientHeight;
    const totalPage = Math.ceil(
      Number(this.total) / Number(this.form.value?.perPage)
    );
    if (
      Math.floor(tracker.scrollTop) >= Math.floor(limit) - 3 &&
      totalPage != this.form.value?.page
    ) {
      this.form
        .get('page')
        ?.setValue(Number(this.form.value?.page) + 1, { emitEvent: true });
    }
  }
}
