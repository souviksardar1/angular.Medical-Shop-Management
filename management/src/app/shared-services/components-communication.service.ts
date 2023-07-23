import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class CompCommunicationService{

data2 = new EventEmitter<string>();
}