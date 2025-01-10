import { Component, OnInit } from '@angular/core';
import { FormatLocation } from '../../util/FormatLocation';

@Component({
  selector: 'app-cars-home',
  templateUrl: './cars-home.component.html',
  styleUrls: ['./cars-home.component.css']
})
export class CarsHomeComponent implements OnInit {

  protected data: [1, 2, 3, 4];
 
  
  ngOnInit(): void {
  
  }
  constructor(){}
  
  convertDate(date: Date){
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }
  

}


