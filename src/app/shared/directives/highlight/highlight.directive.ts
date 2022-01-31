import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    private elementRef: ElementRef
  ) { 
    elementRef.nativeElement.style.backgroundColor = 'gray';
  }

}
