import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructural]'
})
export class StructuralDirective {

  constructor(private tRef: TemplateRef<any>, private container : ViewContainerRef) { }

  @Input() set appStructural(condi : boolean){
        if (!condi) {
          this.container.createEmbeddedView(this.tRef);
        } 
        else {
          this.container.clear();
        }
  }
}
