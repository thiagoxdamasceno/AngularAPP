import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';

//import { LoginGuard } from './login.guard';
import { LoginGuard as AuthGuard } from './login.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'plan', component: PlanComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
]; 

/* const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [{ path: 'plan', component: PlanComponent },],
    canActivate: [LoginGuard] //auth guard
  },
  {
    path: '', component: HomeComponent, // autenticao
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  },
  { path: '**', redirectTo: '' }
]; */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
