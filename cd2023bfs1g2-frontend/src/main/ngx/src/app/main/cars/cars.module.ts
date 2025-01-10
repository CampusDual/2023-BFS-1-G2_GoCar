import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsHomeComponent } from './cars-home/cars-home.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';
import { CarsNewComponent } from './cars-new/cars-new.component';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { OMapModule } from "ontimize-web-ngx-map";



@NgModule({
  declarations: [CarsHomeComponent, CarsDetailComponent, CarsNewComponent],
  imports: [
    CommonModule,
    OntimizeWebModule,
    CarsRoutingModule,
    OChartModule,
    OMapModule
  ]
})
export class CarsModule { }
