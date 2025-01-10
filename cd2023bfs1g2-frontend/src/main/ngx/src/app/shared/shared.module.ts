import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { OMapModule } from "ontimize-web-ngx-map";
import { UsersRegisterComponent } from '../main/users/users-register/users-register.component';

@NgModule({
  imports: [
    OntimizeWebModule,
    OChartModule,
    OMapModule
  ],
  declarations: [
    UsersRegisterComponent
  ],
  exports: [
    CommonModule,
    OMapModule,
    UsersRegisterComponent
  ]
})
export class SharedModule { }
