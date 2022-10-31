import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-input-errors',
  templateUrl: './input-errors.component.html',
  styleUrls: ['./input-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class InputErrorsComponent {
  @Input() errors!: ValidationErrors;

  get errorMessage(): string {
    const key = Object.keys(this.errors)[0];
    const messages: { [key: string]: string } = {
      required: 'The field is required',
      minlength: 'Must be at least 8 characters',
      email: 'Enter a valid email address',
      pattern: 'Enter a valid phone +992918000000',
      matchPassword: 'Passwords do not match',
      maxlength: 'Must be at least 13 characters',
    };
    return messages[key];
  }
}
