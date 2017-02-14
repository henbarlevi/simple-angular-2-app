import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'user-list',
  template: `
    <div class="panel panel-default">
      <table class="table table-striped">
        <tr *ngFor="let user of users">
          <td>
           <b>User Name</b> {{user.userName}} <b>Password</b> {{user.password}}
          </td>
          <td>
            <button (click)="onEdit(user)"
              class="btn btn-primary">Edit</button>
            <button (click)="onRemove(user)"
              class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </table>
    </div>
  `,
})
export class UserListComponent {

  @Input() users = [];
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  onEdit(bookmark) {
    this.edit.emit(bookmark);
  }

  onRemove(bookmark) {
    this.remove.emit(bookmark);
  }

}
