import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { passwordValidator, confirmPassValidator } from './customValidator';
import { ServiceTutorialOnlineService } from '../service-tutorial-online.service';
import { MatSnackBar } from '@angular/material';
import { Action } from 'rxjs/internal/scheduler/Action';
@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.component.html',
  styleUrls: ['./login-or-register.component.css']
})
export class LoginOrRegisterComponent implements OnInit {
  RegForm: FormGroup;
  LoginForm: FormGroup;
  emailExistError:number=0;
  constructor(
    private fb: FormBuilder,
    private _service: ServiceTutorialOnlineService,
    private _snackbar: MatSnackBar
  ) {
    this.RegForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9a-zA-z]{5,}@[A-Za-z]+.[A-Za-z]{2,}')
        ]
      ],
      password: ['', passwordValidator],
      confirmPassword: ['', confirmPassValidator]
    });

    this.LoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.RegForm.controls.password.valueChanges.subscribe(x =>
      this.RegForm.controls.confirmPassword.updateValueAndValidity()
    );
  }

  ngOnInit() {}

  onRegSubmit() {
    this.RegForm.touched;
    if (this.RegForm.valid) {
      console.log('%c  Valid', 'style="color:blue;"');
      console.log(this.RegForm);
      console.log(this.RegForm.get('password'));
      if (this.RegForm.valid) {
        console.log('Reg forms valid');
        console.log(this.RegForm.value);
        this._service.SignUp(this.RegForm.value).subscribe(
          data => {
            console.log('Success: ', data)
            this._snackbar.open(`
            Registration Successful:Try logging!
          `)
          },
          err => {
            console.log("the error status is ",err.status);
            if(err.status==400){
              this.RegForm.controls.email.setErrors({
                notUnique: true
              });
              this._snackbar.open(`
              Registration unsuccessful:Try another email id.
            `)

            }
            else if(err.status===0 &&
               err.message==="Http failure response for http://localhost:3000/regData: 0 Unknown Error"){
                console.log("Server connection error...Check whether server is working");
                this._snackbar.open(`
                  Registration unsuccessful:Server is temporarily down
                `)
            }
            else if(err.status===502){
              console.log("error 502 ",err.error.message);
              if(err.error.message==="there is database side error"){
                this._snackbar.open(`
                Registration unsuccessful:Database connection error
                `)
              console.log("There is database error",err);
              }
              else if(err.error.message==="Error while inserting data"){
                this._snackbar.open(`Registration unsuccessful:Error while inserting data`);
                console.log("Connected to database, error while inserting data in database")
              }
              else{
                console.log("There is unknown error 502 ",err);
              }
              

            }

      
            
            this.emailExistError=1;
            console.log('There is an error', err)}
        );
      }
    }
  }

  closeSnackbar(){
    this._snackbar.dismiss();
  }

  onLoginSubmit() {
    this.LoginForm.touched;
  }

  
}
