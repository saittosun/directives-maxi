import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  // @Input() highlightColor: string = 'blue';
  @Input('appBetterHighlight') highlightColor: string;

  constructor(private renderer: Renderer2,
              private elRef: ElementRef) { }
  
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,
    //                        'backgroundColor', 'blue');
  }

  // maxi heriki hostlistenerda da renkden sonra false, false yazdi.asagidaki kirmizi bolumler ne anlatiyor???
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //                       'backgroundColor', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,
    //                       'backgroundColor', 'pink');
    this.backgroundColor = this.defaultColor;
  }

  // in @HostBinding, we can pass a string defining to which property of the hosting element we want to bind.
  @HostBinding('style.backgroundColor') backgroundColor: string;
}
