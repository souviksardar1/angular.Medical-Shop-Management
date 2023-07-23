import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PrintMessageService } from './shared-services/print.service';
import { CompCommunicationService } from './shared-services/components-communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PrintMessageService, CompCommunicationService]
})
export class AppComponent {

  title = 'management';
  
  personalDetails = {id: "1", name: "souvik", address: "India"};
  userData: { id: string, name: string, dept: string } []= [];
  conditionForStructuralDirective: boolean = false;
  printVarForService: string = '';
  compCommu = '';
  constructor(private printSvc: PrintMessageService, 
              private serv: CompCommunicationService){
    this.printVarForService = this.printSvc.PrintSomething();
  }

  OnUserCreate(data: {id: string, name: string, dept: string}){
    console.log("asssa"+data.id);
    this.userData.push({id: data.id, name: data.name, dept: data.dept});
  }

  CompCommune(){
    var data = this.serv.data2.subscribe(
                (d : string) => {
                  //console.log(d.valueOf.name);
                  alert( "qq" + d);
                });
     //console.log(data);           
  }
}
