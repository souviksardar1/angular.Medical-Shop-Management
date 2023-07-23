import { Component } from '@angular/core';
import { CompCommunicationService } from '../shared-services/components-communication.service';

@Component({
  selector: 'app-compoment-communication-by-service',
  templateUrl: './compoment-communication-by-service.component.html',
  styleUrls: ['./compoment-communication-by-service.component.css']
})
export class CompomentCommunicationByServiceComponent{

constructor(private serv: CompCommunicationService){
this.serv.data2.emit("Data emmited for comp communication using service");
}
}
