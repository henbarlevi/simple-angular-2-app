import { RouterModule } from '@angular/router';
import { LoggedInGuard } from './login/logged-in.guard'; //import guard
import { LoginFormComponent } from './login/login-form.component';
import { HomeComponent} from './home/home.component';
export const routing = RouterModule.forRoot([
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoggedInGuard] //the user can go to this route only if the LoggedInGuard allow it
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
]);
