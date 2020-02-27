import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

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

  // maxi heriki hostlistenerda da renkden sonra false, false yazdi.asagidaki kirmizi bolumler ne anlatiyor???
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //                       'backgroundColor', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //                       'backgroundColor', 'pink');
    this.backgroundColor = 'transparent';
  }

  // in @HostBinding, we can pass a string defining to which property of the hosting element we want to bind.
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
}
