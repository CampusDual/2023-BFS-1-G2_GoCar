import { Config } from 'ontimize-web-ngx';

import { environment } from '../environments/environment';
import { MENU_CONFIG } from './shared/app.menu.config';
import { SERVICE_CONFIG } from './shared/app.services.config';

export const CONFIG: Config = {
  // The base path of the URL used by app services.
  //apiEndpoint: 'https://try.imatia.com/ontimizeweb/services/qsallcomponents-jee/services/rest',
  apiEndpoint: (window['__env'] !== undefined) ? window['__env']['apiUrl'] : environment.apiEndpoint,

  // bundle: {
  //   path: 'bundle'
  // },
  // Application identifier. Is the unique package identifier of the app.
  // It is used when storing or managing temporal data related with the app.
  // By default is set as 'ontimize-web-uuid'.
  uuid: 'com.ontimize.web.ngx.jee.seed',

  // Title of the app
  title: 'JEE seed',

  //  Language of the application.
  locale: 'es',

  // The service type used (Ontimize REST standart, Ontimize REST JEE
  // or custom implementation) in the whole application.
  serviceType: 'OntimizeEE',

  // Configuration parameters of application services.
  servicesConfiguration: SERVICE_CONFIG,

  appMenuConfiguration: MENU_CONFIG,

  applicationLocales: ['es', 'en', 'gl'],

  exportConfiguration: {
    path: '/export'
  }
};
