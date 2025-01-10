import { Injectable } from "@angular/core";
import { OFormMessageService } from "ontimize-web-ngx";

@Injectable()
export class CustomMessageServiceRent extends OFormMessageService {

  getDiscardChangesConfirmationMessage(): string {
    return 'Are you really sure you want to do this? All changes will be lost';
  }

  getUpdateErrorMessage(): string {
    return 'Saving data failed';
  }
   
  public getInsertSuccessMessage(): string {
    return 'Successful rental'
  }
  
  public getInsertErrorMessage(): string {
    return 'Error when renting';
  }

  
}