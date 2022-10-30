import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spliceImage',
})
export class SpliceImagePipe implements PipeTransform {
  transform(images: Array<any>) {
    if (images?.length) return [...images]?.splice(0, 4);
    return;
  }
}
