import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnDestroy {
  @Input() isClose: boolean = true;
  @Input() isVisible = false;

  public open(): void {
    this.isVisible = true;
  }

  public close(): void {
    this.isVisible = false;
  }

  ngOnDestroy(): void {
    this.close();
  }
}
