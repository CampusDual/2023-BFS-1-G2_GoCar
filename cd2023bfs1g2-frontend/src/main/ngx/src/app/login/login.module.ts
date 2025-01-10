import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { UsersRegisterComponent } from '../main/users/users-register/users-register.component';

@NgModule({
  imports: [
    SharedModule,
    OntimizeWebModule,
    LoginRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent
  ],
  entryComponents: [
    UsersRegisterComponent
  ]
})
export class LoginModule { }
