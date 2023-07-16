import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-property-binding-child',
  templateUrl: './custom-property-binding-child.component.html',
  styleUrls: ['./custom-property-binding-child.component.css']
})
export class CustomPropertyBindingChildComponent {
@Input() inputProp : {id: string, name: string, address: string}; //coming here from parent
}
