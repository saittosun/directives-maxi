import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // means this will now be recognised whenever I add appBasicHighlight without square brackets to an element.
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  // tslint:disable-next-line:max-line-length
  // to be able to use this data in our class here, everywhere in the class, we can use a TypeScript shortcut of adding private in front of it which will make this both a property of this class, so property element ref and automatically assign this value, so this instance we're getting to this property.
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    //  what we're doing here is we're getting access to the element the directive was placed on, getting access to that exact element and then we're overriding the style of this element.
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

}
