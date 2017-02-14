import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
//login
import { LoginService } from './login/login.service';
import { LoggedInGuard } from './login/logged-in.guard'; //import the guard
import { LoginFormComponent } from './login/login-form.component';
//home
import { HomeComponent} from './home/home.component';
  //home-shared:
  import {UserEditComponent } from './home/shared/user-edit.component';
  import {UserListComponent } from './home/shared/user-list.component';
//shared:
import { UsersService} from './shared/users.service';  
@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    UserEditComponent,
    UserListComponent
  ],
  providers: [
    LoginService,
    LoggedInGuard, //include guard
    UsersService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
