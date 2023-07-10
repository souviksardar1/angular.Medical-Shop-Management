import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-event-attribute',
  templateUrl: './binding-event-attribute.component.html',
  //styleUrls: ['./binding-event-attribute.component.css']
  styles: [`
  .Classname{
    color: Red;
  }
  `]
})
export class BindingEventAttributeComponent {

  stringInterpolationVar: string = "souvik";
  propToSet : boolean = true;
  modelData : string = "";
  eventdata: string = "";
  isParaShown : boolean = false;
  switch_expression : string = "2";
  conditionToFeedColor : string = "yess";
  dataforLoop : string[] = ["Souvik", "Suprava"];

  InputEvent(evnt: Event){
    //console.log((<HTMLInputElement>evnt.target).value);
     //return (<HTMLInputElement>evnt.target).value;
     this.eventdata = (<HTMLInputElement>evnt.target).value;
  }
  getColor(){
    return "Grey";
  }

}
