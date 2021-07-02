import { Directive, ElementRef, Input, AfterViewInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective implements AfterViewInit {

  @Input() tcolor!: string;
  @Input() tsize!: string;
  
  constructor(private el: ElementRef) {
    
  }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.color = 'black';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = this.tcolor;
  }

  ngAfterViewInit(): void {
    this.tcolor = this.tcolor || 'blue';
    this.tsize = this.tsize || '20px';
    this.el.nativeElement.style.color = this.tcolor;
    this.el.nativeElement.style.fontSize = this.tsize;
  }

}
