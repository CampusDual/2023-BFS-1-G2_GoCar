import { Injectable } from "@angular/core";
import { OFormMessageService } from "ontimize-web-ngx";

@Injectable()
export class CustomMessageServiceCar extends OFormMessageService {

  getDiscardChangesConfirmationMessage(): string {
    return 'Are you really sure you want to do this? All changes will be lost';
  }

  getUpdateErrorMessage(): string {
    return 'Saving data failed';
  }
  
  public getInsertSuccessMessage(): string {
    return 'Coche registrado'
  }
  
  public getInsertErrorMessage(): string {
    return 'Error en la inserción';
  }

  getUpdateSuccessMessage(): string {
    return 'Modification done successfully';
  }
  getDeleteSuccessMessage(): string {
    return 'Car removed';
  }

  getDeleteErrorMessage(): string {
    return 'Erase failed';
  }
 
}