import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SearchInputComponent implements ControlValueAccessor {
  @Output() focus: EventEmitter<FocusEvent> = new EventEmitter();
  @Output() blur: EventEmitter<FocusEvent> = new EventEmitter();
  @Input() disabled = false;
  @Input() placeholder: string = 'Type query';
  private innerValue!: string;

  constructor(@Self() @Optional() public ngControl: NgControl) {
    ngControl.valueAccessor = this;
  }

  get hasError(): boolean {
    return !!(
      this.ngControl.control?.touched && this.ngControl.control?.invalid
    );
  }

  get value(): string {
    return this.innerValue;
  }

  set value(value: string) {
    this.writeValue(value);
    this.onChange(value);
    this.onTouch(value);
  }

  public writeValue(value: string): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onChange: any = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public onTouch: any = () => {};
}
