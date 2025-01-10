import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, FormBuilder, FormGroup } from '@angular/forms';
import { OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { OMapComponent } from 'ontimize-web-ngx-map';
import * as L from 'leaflet';
import { Subscriber } from 'rxjs';
import { Combo } from '../../util/Combo';

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {

  car_id: Number;
  protected carService: OntimizeService;
  validatorsConfirmPlateArray: ValidatorFn[] = [];
  @ViewChild('oMapMarker', { static: false }) oMapMarker: OMapComponent;
  @ViewChild('form', { static: false }) form: OFormComponent;
  dialogForm: FormGroup;
  combo= new Combo();
  
  constructor(public injector: Injector,
    private fb: FormBuilder) {
    this.validatorsConfirmPlateArray.push(this.plateFormatValidator);
    this.carService = this.injector.get(OntimizeService);
  }

  public longitude;
  public latitude;

 

  formInit() {

    this.car_id = parseInt(this.form.getFieldValue('car_id'));
    this.getLongLat();
  }

  ngOnInit() {
    this.configureCarService();

    this.dialogForm = this.fb.group({});
  }

  plateFormatValidator(control: AbstractControl): ValidationErrors | null {
    try {
      const platePattern = /^[0-9]{4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}$/i;
      return platePattern.test(control.value) ? null : { plateNotFormat: true };
    } catch (e) {
      // Handle the error if necessary
    }
  }

  // Para servicios mapa
  public onFormDataLoaded(data: any) {
    if (data.LATITUDE) {
      this.latitude = data.LATITUDE;
    }
    if (data.LONGITUDE) {
      this.longitude = data.LONGITUDE;
    }
  }

  public configureCarService() {
    const conf = this.carService.getDefaultServiceConfiguration('cars');
    this.carService.configureService(conf);
  }


  public getLongLat() {

    this.carService.query({ 'car_id': this.car_id }, ['longitude', 'latitude'], 'myCar').subscribe(result => {
      this.longitude = result.data[0].longitude;
      this.latitude = result.data[0].latitude;
    });

  }

  public hasGPSPositition() {
    return this.latitude && this.longitude;
  }

  public getPositionGPS() {
    return this.latitude + ',' + this.longitude;
  }


  public addDrawEvent(arg) {
    const layer = arg.layer;
    if (layer instanceof L.Marker) {
      const latLng = layer.getLatLng();
      const latitude = latLng.lat;
      const longitude = latLng.lng;
      console.log('New marker placed at:', latitude, longitude);   
      this.form.setFieldValue("longitude", longitude);
      this.form.setFieldValue("latitude", latitude);
      const apiKey= `AIzaSyDeV0LKQvk1HMV0lnGyrhHTYgEAYI2_HZc`
      const urlCalles = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDeV0LKQvk1HMV0lnGyrhHTYgEAYI2_HZc`
      fetch(urlCalles).then(res => res.json()).then(res => {
        if(res) {
         this.form.setFieldValue("location", res.results[0].formatted_address
         )
        } else {
          this.form.setFieldValue("location", "Error en la seleccion de localizacion")
        }

      }) 

    }
  }

  public moveMapToLocation() {
    const location = this.form.getFieldValue('location');
    // Nominatim API
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        if (data && data.length > 0) {
          const latitude = parseFloat(data[0].lat);
          const longitude = parseFloat(data[0].lon);
          const zoom = 12; // Nivel de zoom que queremos

          // Mueve el mapa a la localizacion deseada y pone el zoom declarado arriba
          const mapInstance = this.oMapMarker.getLMap();
          mapInstance.setView([latitude, longitude], zoom);
        }
      })
      .catch((error) => {
        console.error('Error geocoding location:', error);
        // Maneja el error
      });
  }

  public json(){
      console.log("hola");
  }
}