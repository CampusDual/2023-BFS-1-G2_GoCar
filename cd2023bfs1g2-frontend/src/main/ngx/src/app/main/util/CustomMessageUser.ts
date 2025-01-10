import { Injectable } from "@angular/core";
import { OFormMessageService } from "ontimize-web-ngx";

@Injectable()
export class CustomMessageServiceUser extends OFormMessageService {

  getDiscardChangesConfirmationMessage(): string {
    return 'Are you really sure you want to do this? All changes will be lost';
  }

  getUpdateErrorMessage(): string {
    return 'Saving data failed';
  }
  
  public getInsertSuccessMessage(): string {
    return 'Registrado con exito'
  }

  public getInsertErrorMessage(): string {
    return 'MESSAGES.ERROR_INSERT';
  }

  
}