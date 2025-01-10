import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsHomeComponent } from './cars-home/cars-home.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';
import { CarsNewComponent } from './cars-new/cars-new.component';



const routes: Routes = [
{path : '',  component : CarsHomeComponent},
{path : 'new', component : CarsNewComponent },
{path : ':car_id', component : CarsDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
