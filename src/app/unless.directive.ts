import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // tslint:disable-next-line:max-line-length
  //  want to bind to a property named unless, which kind of simply is the condition we get but whenever this condition changes, so whenever some input parameter here changes, I want to execute a method and therefore, I can implement a setter with the set keyword. This now turns this into a method, though technically and that's important to understand, this still is a property, it's just a setter of the property which is a method which gets executed whenever the property changes and it of course changes whenever it changes outside of this directive, so whenever the condition we pass changes or some parameter of this condition. Unless therefore needs to receive the value, the property we would normally get as an input and we know that this will be a boolean because it will be our condition in the end
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>,
              private vcRef: ViewContainerRef ) { }

}
