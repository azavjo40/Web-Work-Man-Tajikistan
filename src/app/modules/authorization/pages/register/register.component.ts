import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/stores/app/service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public form: UntypedFormGroup = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
    name: [null, [Validators.required]],
    roles: [['user'], [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appService: AppService
  ) {}

  public register() {
    if (this.form.invalid) return this.form.markAllAsTouched();
    this.appService.register(this.form.value).subscribe(() => {
      this.form.reset();
      this.router.navigateByUrl('/logged/create/ads');
    });
  }
}
