import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() id!: string;
  @Input() type: 'button' | 'submit' = 'button';
  @Input() width!: string;
  @Input() height!: string;
  @Input() rounded!: string;
  @Input() isWidthFull = false;
  @Input() backgroundColor!: string;
  @Input() color!: string;

  @HostBinding('class') get classes(): string {
    return this.isWidthFull ? 'block w-full' : 'inline-block';
  }
}
