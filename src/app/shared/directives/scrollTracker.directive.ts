import { Directive, HostListener } from '@angular/core';
@Directive({
  selector: '[scrollTracker]',
})
export class ScrollTrackerDirective {
  constructor() {}
  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    let tracker = event.target;
    let limit = tracker.scrollHeight - tracker.clientHeight;
    if (event.target.scrollTop === limit) {
      console.log('end reached test');
    }
  }
}
