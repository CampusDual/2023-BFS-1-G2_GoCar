import { Component, OnInit, ViewChild } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';
import { OChartComponent, DiscreteBarChartConfiguration, DataAdapterUtils, StackedAreaChartConfiguration } from 'ontimize-web-ngx-charts';
import { D3LocaleService } from 'src/app/shared/d3-locale/d3Locale.service';


@Component({
  selector: 'app-rentals-my-cars-home',
  templateUrl: './rentals-my-cars-home.component.html',
  styleUrls: ['./rentals-my-cars-home.component.css']
})
export class RentalsMyCarsHomeComponent implements OnInit {

  
  ngOnInit(): void {
  
  }

  convertDate(date: Date){
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }

}
