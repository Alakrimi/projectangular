import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './frontoffice/login/login.component';
import { SignupComponent } from './frontoffice/signup/signup.component';
import { DashboardComponent } from './backoffice/dashboard/dashboard.component';
export const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: HomepageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'dashboard', component: DashboardComponent }

];
