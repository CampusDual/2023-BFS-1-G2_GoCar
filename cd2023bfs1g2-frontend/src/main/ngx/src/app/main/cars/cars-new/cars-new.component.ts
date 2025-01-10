import { Component, Injector, OnInit, ViewChild } from '@angular/core'
import { MatDialogRef } from '@angular/material';
import { OFormComponent, OntimizeService } from 'ontimize-web-ngx';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

import { CurrentDay } from '../../util/CurrentDay';
import { OMapComponent } from 'ontimize-web-ngx-map';
import * as L from 'leaflet'; // IMPORTANTE MAPA (no tocar esta porfi)
import { FormatLocation } from '../../util/FormatLocation';
import { Combo } from '../../util/Combo';


@Component({
  selector: 'app-cars-new',
  templateUrl: './cars-new.component.html',
  styleUrls: ['./cars-new.component.css']
})

export class CarsNewComponent implements OnInit {
  combo = new Combo();
  fecha: string;
  validatorsConfirmPlateArray: ValidatorFn[] = [];
  protected carService: OntimizeService;
  idUser: string = sessionStorage.getItem('user_id')
  formatMethod = new FormatLocation();
  public positionNavigator: string;

  @ViewChild('form', { static: false }) form: OFormComponent;
  @ViewChild('oMap', { static: false }) oMapMarker: OMapComponent;

  dialogForm: FormGroup;

  //  Para servicio de mapa
  public longitude;
  public latitude;

  constructor(public injector: Injector, private dialogRef: MatDialogRef<CarsNewComponent>, private fb: FormBuilder) {
    //  this.oMapMarker.getDrawControlEventsObservable().subscribe(resp => {})
    // this.oMapMarker.addMarker(id, this.latitude, this.longitude);
    this.carService = this.injector.get(OntimizeService);
    this.validatorsConfirmPlateArray.push(this.plateFormatValidator);
  }

  plateFormatValidator(control: AbstractControl): ValidationErrors | null {
    try {
      const platePattern = /^[0-9]{4}(?!.*(LL|CH))[BCDFGHJKLMNPRSTVWXYZ]{3}$/i;
      return platePattern.test(control.value) ? null : { plateNotFormat: true };
    } catch (e) {
    }
  }

  ngOnInit() {
    this.getGeolocation();
  }

  ngAfterViewInit() {
    this.getDrawLayer();
  }

  getDrawLayer() {
    console.log("test");
  }

  public starEndDate() {

    let startDate = this.form.getFieldValue("start_date_available");
    const fecha = new Date(startDate);
    this.fecha = fecha.toISOString().slice(0, 10).toString();
    this.form.setFieldValue("end_date_available", this.fecha);
  }

  public currentDay() {
    const today = new CurrentDay();
    return today.currentDay();;
  }

  //Para servicios mapa
  public onFormDataLoaded(data: any) {
    if (data.LATITUDE) {
      this.latitude = data.LATITUDE;
    }
    if (data.LONGITUDE) {
      this.longitude = data.LONGITUDE;
    }
  }

  public hasGPSPositition() {
    if (this.latitude && this.longitude) {
      return true;
    }
    return false;
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
      const apiKey = `AIzaSyDeV0LKQvk1HMV0lnGyrhHTYgEAYI2_HZc`
      const urlCalles = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDeV0LKQvk1HMV0lnGyrhHTYgEAYI2_HZc`
      fetch(urlCalles).then(res => res.json()).then(res => {
        let resFinal = res.results[0].formatted_address;
        this.form.setFieldValue("location", resFinal)
      })

    }
  }

  public moveMapToLocation() {
    const location = this.form.getFieldValue('location');

    // Nominatim api
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
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

  public getGeolocation() {
    navigator.geolocation.getCurrentPosition(position => {
      var latitute = position.coords.latitude;
      var longitude = position.coords.longitude;
      this.positionNavigator = `${latitute};${longitude}`;

    })
  }

  public centerMapLocation() {
    if (!this.positionNavigator) {
      this.positionNavigator = "40.419020587254735;-3.7001507068918635";
    }
    this.oMapMarker.setCenter(this.positionNavigator);
  }

}

