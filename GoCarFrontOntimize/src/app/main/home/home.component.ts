import { Component, Injector, OnInit, ViewChild, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormatLocation } from '../util/FormatLocation';
import { OntimizeService } from 'ontimize-web-ngx';
import { OMapComponent } from 'ontimize-web-ngx-map';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MapHomeComponent } from './map-home/map-home.component';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public user: string;
  protected carService: OntimizeService;
  public positionsCars: any[];
  formatMethod = new FormatLocation();
  public show: boolean = true;
  public positionNavigator: string;

  @ViewChild('oMapMarker', { static: false }) oMap: OMapComponent;
  reloadMapFlag: boolean = false;

  constructor(
    public injector: Injector,
    private router: Router,
    private actRoute: ActivatedRoute,
    protected dialog: MatDialog) {
    this.carService = this.injector.get(OntimizeService);
  }


  ngOnInit() {

    const localStorageData = JSON.parse(localStorage.getItem('com.ontimize.web.ngx.jee.seed'));
    this.user = localStorageData.session.user;

    if (localStorageData && localStorageData.session && localStorageData.session.user) {
      this.user = localStorageData.session.user;
    }
  }


  showOptions() {
    this.show = !this.show;
  }
  

  navigate() {
    this.router.navigate(['../', 'login'], { relativeTo: this.actRoute });
  }
  convertDate(date: Date) {
    const newDate = new Date(date);
    return (newDate.toLocaleDateString());
  }

  public proba(location: string) {
    let resultt = this.formatMethod.format(location);
    return resultt
  }

  public openMap(): void {
    this.dialog.open(MapHomeComponent, {
      disableClose: false, 
      height: '650px',
      width: '700px'
    });
  }
}
