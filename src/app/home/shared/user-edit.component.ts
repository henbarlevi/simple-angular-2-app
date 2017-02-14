import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-edit',
  template: `
    <div class="panel panel-primary">
      <div class="panel-body">
        <input class="form-control" type="text" [(ngModel)]="user.userName"
          placeholder="user name" style="width: 25%;" #userNameField="ngModel" required pattern=".+@.+">
        <input class="form-control" type="text" [(ngModel)]="user.password"
          placeholder="password" style="width: 25%;" #passwordField="ngModel" required>
        <button [disabled]="userNameField.invalid || passwordField.invalid" (click)="onSave()" class="btn btn-primary">Save</button>
      </div>
    </div>
  `,
  styles:[`
  input{
    display: inline;
  }
  `]
})
export class UserEditComponent {

  @Input() user = {};
  @Output() save = new EventEmitter();

  onSave() {
    this.save.emit(this.user);
  }

}
