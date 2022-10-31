import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/stores/app/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() refreshLogin: EventEmitter<FocusEvent> = new EventEmitter();
  @Input() isLogo: boolean = true;
  @Input() isGoToHome: boolean = false;
  public form: UntypedFormGroup = this.fb.group({
    username: [
      '+992',
      [
        Validators.required,
        Validators.pattern(new RegExp('(992)[0-9 ]{9}')),
        Validators.maxLength(13),
      ],
    ],
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
      this.refreshLogin.emit();
      this.router.navigateByUrl('/logged/create/ads');
    });
  }
}
