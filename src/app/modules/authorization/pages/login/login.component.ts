import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';
import { AppService } from 'src/app/stores/app/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form: UntypedFormGroup = this.fb.group({
    userName: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appService: AppService,
    private storageService: StorageService
  ) {}

  public login() {
    if (this.form.invalid) return this.form.markAllAsTouched();
    this.storageService.saveToken('dsnkjfhdsflkjdslkfjdskfjdsjf;lk');
    console.log(this.form.value);
    this.form.reset();
    this.router.navigate(['/quest/home']);
  }
}
