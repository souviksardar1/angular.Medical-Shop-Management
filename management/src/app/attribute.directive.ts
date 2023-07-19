import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective implements OnInit{

  constructor(private elRef: ElementRef, private ren : Renderer2) { }
  ngOnInit(): void {
    this.ren.setStyle(this.elRef.nativeElement, "color", "blue");
  }
}
