import { AfterViewInit, Component, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { OntimizeService } from 'ontimize-web-ngx';
import { OMapComponent } from 'ontimize-web-ngx-map';

@Component({
  selector: 'app-map-home',
  templateUrl: './map-home.component.html',
  styleUrls: ['./map-home.component.css']
})
export class MapHomeComponent implements OnInit {

  protected carService: OntimizeService;
  public positionsCars: any[];
  public positionNavigator: string;
  public longitude: any = -3.7001507068918635;
  public latitude: any = 40.419020587254735;

  @ViewChild('oMapMarker', { static: false }) oMap: OMapComponent;

  constructor(public injector: Injector, private dialogRef: MatDialogRef<MapHomeComponent>, private fb: FormBuilder) {
    this.carService = this.injector.get(OntimizeService);
    this.positionsCars = []
  }

  ngOnInit() {
    this.configureCarService();
    this.getData();
    this.getGeolocation();
 }


  public addMarkerOnMap() {
    this.positionsCars.forEach(marker => {
      //we add each mark and if it does not have postionNavigator because it does not have geolocation we set it to Madrid
      this.oMap.getMapService().addMarker(marker.car_id, marker.latitude, marker.longitude, null, null, null, null, null);
      if (!this.positionNavigator) {
        this.positionNavigator = "40.419020587254735;-3.7001507068918635";
      }
      this.oMap.setCenter(this.positionNavigator);
    })
  }

  //method that we call from the html to call the function once the map is loaded
  public centerMap() {
    if (this.positionsCars.length > 0 && this.sameLocation()) {
      this.addMarkerOnMap();
    }
  }

  
//We check if the longitudes and latitudes that the map has are different from those set to use in center map
  public sameLocation() {
    let longitudeMap = this.oMap.getCenter().longitude;
    let latitudeMap = this.oMap.getCenter().latitude;

    return longitudeMap != this.longitude && latitudeMap != this.latitude;
  }

  //Retrieve browser location if location is enabled
  public getGeolocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.positionNavigator = `${this.latitude};${this.longitude}`;
      return `${this.latitude};${this.longitude}`;
    })
  }

  //add in the positionCars array with the values ​​in the database
  public getData() {
    this.carService.query(null, ['car_id', 'longitude', 'latitude'], 'availableCars').subscribe(result => {
      this.positionsCars = result.data.map(item => {
        return {
          car_id: item.car_id,
          longitude: item.longitude,
          latitude: item.latitude
        };
      });
    })
  }

  public configureCarService() {
    const conf = this.carService.getDefaultServiceConfiguration('cars');
    this.carService.configureService(conf);
  }

}
