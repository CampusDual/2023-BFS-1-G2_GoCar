import { Component, Inject, Injector, OnInit, ViewChild } from "@angular/core";
import {
  ValidatorFn,
  FormBuilder,
  FormGroup,
} from "@angular/forms";
import { MatDialogRef } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService, OFormComponent, OntimizeService } from "ontimize-web-ngx";

@Component({
  selector: "app-users-register",
  templateUrl: "./users-register.component.html",
  styleUrls: ["./users-register.component.css"],
})
export class UsersRegisterComponent implements OnInit {
  protected userService: OntimizeService;
  validatorsConfirmPasswordArray: ValidatorFn[] = []; //array para la validación de 2 contraseñas iguales.

  public pass: string | undefined;
  public confirm_pass: string | undefined;

  @ViewChild("form", { static: false }) form: OFormComponent;

  dialogForm: FormGroup;

  constructor(
    public injector: Injector,
    private dialogRef: MatDialogRef<UsersRegisterComponent>,
    private router: Router,
    private actRoute: ActivatedRoute,
    @Inject(AuthService)
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.validatorsConfirmPasswordArray.push(this.passwordMatchValidator);
    this.userService = this.injector.get(OntimizeService);
  }

  ngOnInit() {
    this.dialogForm = this.fb.group({});
    this.configureUserService();
  }

  public async send() {
    const password = this.form.formGroup.get("password").value;
    const confirmPassword = this.form.formGroup.get("confirm_password").value;
    const userName = this.form.formGroup.get("user_").value;

    if (password !== confirmPassword) {
      console.log("pass no igual");
      alert("Las contraseñas no coinciden");
    } else {
      this.form.insert();
    }
  }

  public configureUserService() {
    const conf = this.userService.getDefaultServiceConfiguration("users");
    this.userService.configureService(conf);
  }

  public forceInsertMode(event: any) {
    if (event != OFormComponent.Mode().INSERT) {
      this.form.setInsertMode();
    }
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  passwordMatchValidator(control: any): any {
    try {
      const password = control.parent
        ? control.parent.controls["password"].value
        : null;
      const confirm_password = control.value;
      return password === confirm_password
        ? null
        : { passwordsNotMatched: true };
    } catch (e) { }
  }
  public reviewMatches(event: Event) {
    this.form.formGroup.controls["confirm_password"].updateValueAndValidity();
    this.form.formGroup.get("confirm_password").markAsTouched();
  }
}
