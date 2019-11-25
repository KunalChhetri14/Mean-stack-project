import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginOrRegisterComponent } from './login-or-register/login-or-register.component';


const routes: Routes = [{
  path :'', component:LoginOrRegisterComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
