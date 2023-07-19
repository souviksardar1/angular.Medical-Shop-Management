import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-property-binding-child',
  templateUrl: './custom-property-binding-child.component.html',
  styleUrls: ['./custom-property-binding-child.component.css']
})
export class CustomPropertyBindingChildComponent{

data : string = '';

@Input() inputProp : {id: string, name: string, address: string}; //coming here from parent

@ViewChild('viewChild', {static: true}) datausingViewChild : ElementRef;

GetDataViewChild(){
  this.data =  this.datausingViewChild.nativeElement.value;
  console.log(this.datausingViewChild.nativeElement.value);
}
}
