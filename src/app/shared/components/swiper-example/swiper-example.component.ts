import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);

@Component({
  selector: 'app-swiper-example',
  templateUrl: './swiper-example.component.html',
  styleUrls: ['./swiper-example.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperExampleComponent {
  @Input() images: any = [];
  @Input() isNavigation: boolean = false;
  @Input() isWidthFull: boolean = false;
  @Input() isIntegrtion: boolean = false;
  @Input() isDelete: boolean = false;
  @Output() delete: EventEmitter<string> = new EventEmitter();
  public apiUrl: string = environment.apiUrl;

  public swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 0,
  };

  public deleteImage(image: string) {
    this.delete.emit(image);
  }
}
