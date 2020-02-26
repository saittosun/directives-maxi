import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2,
              private elRef: ElementRef) { }
  
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //                        'backgroundColor', 'blue');
  }

  // maxi heriki hostlistenerda da renkden sonra false, false yazdi
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement,
                          'backgroundColor', 'blue');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement,
                          'backgroundColor', 'pink');
  }
}
