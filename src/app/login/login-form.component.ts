import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  templateUrl: './login-form.component.html',
   styleUrls: ['./login-form.component.css'] 
})
export class LoginFormComponent {

  userName = '';
  password = '';

  constructor(private router: Router,
              private loginService: LoginService) { }

  login(form) {
    if (this.loginService.login(this.userName, this.password)) {
      this.router.navigate(['/']);
    }
  }

}
