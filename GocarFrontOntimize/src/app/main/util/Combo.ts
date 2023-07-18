import { Injectable } from "@angular/core";
import { OTranslateService } from "ontimize-web-ngx";

@Injectable({
  providedIn: 'root'
})

export class Combo {

  constructor(
    ) { }



  
  public fuelsArray = [{
    fuelCode: 1,
    fuelText: JSON.parse(localStorage.getItem("com.ontimize.web.ngx.jee.seed"))['lang'] == "es" ? 'Gasolina' : ((JSON.parse(localStorage.getItem("com.ontimize.web.ngx.jee.seed"))['lang'] == "en") ? 'Gasoline': 'Gasolina') 
  }, {
    fuelCode: 2,
    fuelText: JSON.parse(localStorage.getItem("com.ontimize.web.ngx.jee.seed"))['lang'] == "es" ? 'Gasóleo' : ((JSON.parse(localStorage.getItem("com.ontimize.web.ngx.jee.seed"))['lang'] == "en") ? 'Diesel oil': 'Gasóleo')
  },{
    fuelCode: 3,
    fuelText: JSON.parse(localStorage.getItem("com.ontimize.web.ngx.jee.seed"))['lang'] == "es" ? 'Eléctrico' : ((JSON.parse(localStorage.getItem("com.ontimize.web.ngx.jee.seed"))['lang'] == "en") ? 'Electric': 'Eléctrico')
  }, {
    fuelCode: 4,
    fuelText: JSON.parse(localStorage.getItem("com.ontimize.web.ngx.jee.seed"))['lang'] == "es" ? 'Híbrido' : ((JSON.parse(localStorage.getItem("com.ontimize.web.ngx.jee.seed"))['lang'] == "en") ? 'Hybrid': 'Híbrido')
  }];


  public selectedFuelCode = 2;

}