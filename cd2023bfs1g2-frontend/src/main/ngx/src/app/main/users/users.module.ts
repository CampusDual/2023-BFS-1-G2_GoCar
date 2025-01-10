import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { UsersRoutingModule } from './users-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OntimizeWebModule,
    UsersRoutingModule,
    SharedModule
  ],

})
export class UsersModule { }
