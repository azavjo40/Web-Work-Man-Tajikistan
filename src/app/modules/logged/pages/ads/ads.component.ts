import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AppService } from 'src/app/stores/app/service';
import { AppState } from 'src/app/stores/app/state';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss'],
})
export class AdsComponent implements OnInit {
  public apiUrl: string = environment.apiUrl;
  public user!: any;
  public userAds!: any;
  public form: any = this.fb.group({
    title: [null, [Validators.required]],
    city: ['Душанбе', [Validators.required]],
    description: [null, [Validators.required]],
    skils: [null, [Validators.required]],
    images: [[], [Validators.required]],
    isPublish: [true, [Validators.required]],
    userId: [null, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private store: Store,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.store.selectSnapshot(AppState.user);
    this.form.patchValue({ userId: this.user?._id });
    this.getAdsUser();
  }

  public getChips(chips: any) {
    this.form.get('skils')?.setValue(chips);
  }

  get hasErrorImages(): boolean {
    return (
      this.form.controls?.images?.touched && this.form.controls?.images?.invalid
    );
  }

  public get errorControllImages() {
    return this.form.controls?.images?.errors;
  }

  public uploadImage(event: any) {
    this.appService
      .createImageLink(event.target.files)
      .subscribe((item: any) => {
        this.form.patchValue({
          images: [...this.form.value?.images, item.url],
        });
      });
  }

  public getAdsUser() {
    this.appService
      .getAdsById(this.form.value.userId, true)
      .subscribe((item: any) => {
        this.userAds = item;
        this.form.patchValue({
          title: item?.ads?.title || null,
          city: item?.ads?.city || 'Душанбе',
          description: item?.ads?.description || null,
          skils: item?.ads?.skils || [],
          images: item?.ads?.images || [],
          isPublish: item?.ads?.isPublish || true,
        });
        this.cdr.markForCheck();
      });
  }

  public deleteAds() {
    this.appService
      .deleteAds()
      .subscribe(() => this.router.navigateByUrl('/guest/home'));
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
