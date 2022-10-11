import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AppService } from 'src/app/stores/app/service';
import { AppState } from 'src/app/stores/app/state';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-cv',
  templateUrl: './page-cv.component.html',
  styleUrls: ['./page-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageCvComponent implements OnInit {
  public apiUrl: string = environment.apiUrl;
  public user!: any;
  public userAds!: any;
  public form: any = this.fb.group({
    title: [null, [Validators.required]],
    city: ['Душанбе', [Validators.required]],
    description: [null, [Validators.required]],
    skils: [null, [Validators.required]],
    images: [[]],
    isPublish: [true, [Validators.required]],
    userId: [null, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private store: Store,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.user = this.store.selectSnapshot(AppState.user);
    this.form.patchValue({ userId: this.user?._id });
    this.getAdsUser();
  }

  public getChips(chips: any) {
    this.form.get('skils')?.setValue(chips);
  }

  public uploadImage(event: any) {
    this.appService
      .createImageLink(event.target.files)
      .subscribe((item: any) =>
        this.form.patchValue({ images: [...this.form.value.images, item.url] })
      );
  }

  public getAdsUser() {
    this.appService
      .getAdsById(this.form.value.userId, true)
      .subscribe((item: any) => {
        this.userAds = item;
        this.form.patchValue({
          title: item?.ads?.title,
          city: item?.ads?.city,
          description: item?.ads?.description,
          skils: item?.ads?.skils,
          images: item?.ads?.images,
          isPublish: item?.ads?.isPublish,
        });
        this.cdr.markForCheck();
      });
  }

  public save() {
    if (!this.form.valid) return this.form.markAllAsTouched();
    this.form.patchValue(
      this.form.value?.description?.replace(/(\r\n|\n|\r)/gm, '')
    );
    if (!this.userAds?.user?.isAds) {
      this.appService.postAds(this.form.value).subscribe();
    } else this.appService.putAds(this.form.value).subscribe();
  }
}
