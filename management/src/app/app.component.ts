import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'management';
  personalDetails = {id: "1", name: "souvik", address: "India"};
  userData: { id: string, name: string, dept: string } []= [];

  OnUserCreate(data: {id: string, name: string, dept: string}){
    console.log("asssa"+data.id);
    this.userData.push({id: data.id, name: data.name, dept: data.dept});
  }

  
}
