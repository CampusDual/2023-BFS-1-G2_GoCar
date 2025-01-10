import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { APP_CONFIG, ONTIMIZE_MODULES, ONTIMIZE_PROVIDERS, OntimizeWebModule } from 'ontimize-web-ngx';

import { environment } from '../environments/environment';
import { OChartModule } from 'ontimize-web-ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG } from './app.config';
import { CustomMessageServiceUser } from './main/util/CustomMessageUser';
import { CustomMessageServiceCar } from './main/util/CustomMessageCars';
import { CustomMessageServiceRent } from './main/util/CustomMessageRent';


// Standard providers...
// Defining custom providers (if needed)...
export const customProviders: any = [
];

@NgModule({
  imports: [
    ONTIMIZE_MODULES,
    OntimizeWebModule,
    OChartModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', 
  
    { enabled: environment.production, }
    )
  
  ],
  declarations: [
    AppComponent,

  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: CONFIG },
    { provide: 'customMessageServiceTypeUser', useValue: CustomMessageServiceUser },
    { provide: 'customMessageServiceTypeCar', useValue: CustomMessageServiceCar },
    { provide: 'customMessageServiceTypeRent', useValue: CustomMessageServiceRent },
    ONTIMIZE_PROVIDERS,
    ...customProviders
  ]
})
export class AppModule { }
