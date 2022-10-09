import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/stores/app/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public form: UntypedFormGroup = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appService: AppService
  ) {}

  public login() {
    if (this.form.invalid) return this.form.markAllAsTouched();
    this.appService.login(this.form.value).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/quest/home']);
    });
  }
}
