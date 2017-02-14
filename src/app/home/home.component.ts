import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { UsersService } from '../shared/users.service';
@Component({
    selector: 'home',
    template: `
    <user-edit [user]="editableUser"
      (save)="save($event)"></user-edit>
    <user-list [users]="users"
      (edit)="edit($event)" (remove)="remove($event)"></user-list>
     <button (click)="onLogout()" class="btn btn-primary">Logout</button>
  
  `
})
export class HomeComponent implements OnInit {

    users = [];

    editableUser = {};
    editMode = false;
    constructor(private router: Router,
        private loginService: LoginService,
        private usersService: UsersService) { }

    ngOnInit() {
        this.users = this.usersService.users;
    }
    remove(user) {
        this.usersService.removeUser(user);
    }
    edit(user) {
        this.editableUser = user
        this.editMode = true;
    }
    save(user){
        if(this.editMode === true){
            this.editableUser ={};
            this.editMode = false;
        }else{

        this.usersService.addUser(user);
        }
    }
    onLogout() {
        this.loginService.loggedIn =false;
         this.router.navigate(['/login']);
    }

}