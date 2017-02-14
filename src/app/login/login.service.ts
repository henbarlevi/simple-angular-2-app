import { Injectable } from '@angular/core';
import { UsersService} from '../shared/users.service';
@Injectable() //in order to inject services - no need to do this when using @Component because @Component already implement the injection
export class LoginService {

  constructor(private usersService : UsersService){}
  
  loggedIn = false;

  login(userName, password) {
    
    if (userName && password) {
    let users = this.usersService.users;
      for (var i = 0; i < users.length; i++) {
        if (users[i].userName === userName &&
          users[i].password === password) {
          this.loggedIn = true;
          break;
        }
      }

    }
    return this.loggedIn;
  }

}
