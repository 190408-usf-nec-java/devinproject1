import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WelcomecomponentComponent } from './components/welcomecomponent/welcomecomponent.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'expenses',
    component: WelcomecomponentComponent
  },
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'create',
    component: CreateComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
