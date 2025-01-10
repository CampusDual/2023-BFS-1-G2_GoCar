import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersRegisterComponent } from './users-register/users-register.component'




const routes: Routes = [{
path: '', component : UsersRegisterComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
