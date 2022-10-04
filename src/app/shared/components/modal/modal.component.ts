import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnDestroy {
  public isVisible = false;

  public open(): void {
    this.isVisible = true;
    console.log('open', this.isVisible);
  }

  public close(): void {
    this.isVisible = false;
  }

  ngOnDestroy(): void {
    this.close();
  }
}
