import { HomeService } from './home.service';
import { Title } from '@angular/platform-browser';
import { AppState } from 'src/app/stores/app/state';
import { Store } from '@ngxs/store';
import { Subscription, filter, take } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { AppService } from 'src/app/stores/app/service';
import { environment } from 'src/environments/environment';
import { SetAds } from 'src/app/stores/app/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('contentArea') private contentArea!: ElementRef<HTMLDivElement>;
  private subscription$: Subscription = new Subscription();
  public avatar: string = 'assets/icons/avatar-user.png';
  public workersMan: Array<any> = [];
  public user!: any;
  public apiUrl: string = environment.apiUrl;
  public total = 0;
  public isLoading: boolean = false;

  public form = this.fb.group({
    page: 1,
    perPage: 20,
    isLoading: false,
  });

  constructor(
    private appService: AppService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private store: Store,
    private titleService: Title,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Offers');
    this.refreshAds();
    this.subscription$.add(
      this.form.valueChanges.subscribe(() => this.getAllAds())
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.startPositionScroll();
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
    this.isLoading = true;
    this.appService.getAllAds(this.form.value).subscribe(
      (items: any) => {
        this.total = items?.total;
        this.workersMan = [...this.workersMan, ...items?.data];
        this.store.dispatch(
          new SetAds({ data: this.workersMan, page: this.form.value?.page })
        );
        this.isLoading = false;
        this.cdr.detectChanges();
      },
      () => (this.isLoading = false)
    );
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

  public savePositionScroll = () => {
    const scrollTop = this.contentArea.nativeElement.scrollTop;
    this.homeService.setPositionScroll(scrollTop);
  };

  public startPositionScroll = () => {
    this.subscription$.add(
      this.homeService.position$
        .pipe(
          filter((p: any) => p !== 0),
          take(1)
        )
        .subscribe((p) => {
          this.contentArea.nativeElement.scrollTop = p;
          this.cdr.detectChanges();
        })
    );
  };
}
