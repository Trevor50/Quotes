import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core'
import { from } from 'rxjs';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elem:ElementRef) { 
    elem.nativeElement.style.backgroundColor="white"
  }

}
