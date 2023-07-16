import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-property-binding-parent',
  templateUrl: './custom-property-binding-parent.component.html',
  styleUrls: ['./custom-property-binding-parent.component.css']
})
export class CustomPropertyBindingParentComponent {
 userId = '';
 userName = '';
 userDept = '';
  @Output() userCreated = new EventEmitter<{id: string, name: string, dept: string}>(); // going to app comp

  CreateUserWithDetail(){
    this.userCreated.emit({id : this.userId, name: this.userName, dept:this.userDept});
  }
}
