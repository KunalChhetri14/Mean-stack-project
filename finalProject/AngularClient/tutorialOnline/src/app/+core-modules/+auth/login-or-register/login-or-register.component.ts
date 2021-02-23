import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { passwordValidator, confirmPassValidator } from './customValidator';
import { ServiceTutorialOnlineService } from '../../../core/services/course-services/service-tutorial-online.service';
import { MatSnackBar } from '@angular/material';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.component.html',
  styleUrls: ['./login-or-register.component.css']
})
export class LoginOrRegisterComponent implements OnInit {
  RegForm: FormGroup;
  LoginForm: FormGroup;
  emailExistError: number = 0;
  constructor(
    private fb: FormBuilder,
    private _service: ServiceTutorialOnlineService,
    private _snackbar: MatSnackBar,
    private _router: Router,
    private _route: ActivatedRoute
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

  onLoginSubmit() {
    this.LoginForm.touched;
    if (this.LoginForm.valid) {
      this._service.Login(this.LoginForm.value).subscribe(
        data => {
          //       this._snackbar.open(`
          //     LOGIN SUCCESSFUL
          // `);
          console.log('the token is ', data.token);
          localStorage.setItem('token', data.token);
          this._router.navigateByUrl('/ViewCourses');
          // this._router.navigate(['ViewCourses'], { relativeTo: this._route });
        },
        err => {
          console.log('the error status is ', err);
          if (err.status == 400) {
            if (err.error.message === 'No EmailId linked') {
              this.LoginForm.controls.email.setErrors({
                notExist: true
              });
              this._snackbar.open(`
          Login unsuccessful:Reenter email id.
        `);
            } else if (err.error.message === 'PasswordIncorrect') {
              this.LoginForm.controls.password.setErrors({
                PasswordIncorrect: true
              });
              this._snackbar.open(`Login unsuccessful: Password doesn't match`);
            } else {
              this._snackbar.open(`Unknown Error`);
            }
          } else if (err.status === 502) {
            console.log('error 502 ', err.error.message);
            if (err.error.message === 'there is database side error') {
              this._snackbar.open(`
                Registration unsuccessful:Database connection error
                `);
              console.log('There is database error', err);
            } else if (err.error.message === 'Error while inserting data') {
              this._snackbar.open(
                `Registration unsuccessful:Error while inserting data`
              );
              console.log(
                'Connected to database, error while inserting data in database'
              );
            } else {
              console.log('There is unknown error 502 ', err);
            }
          } else {
            console.log('Server not connected');
            this._snackbar.open('Server not connected');
          }
        }
      );
    }
  }

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
            // console.log('Success: ', data);
            //   this._snackbar.open(`
            //   Registration Successful:Try logging!
            // `);
            console.log('the token is ', data.token);

            //Storing in localStorage for authetication
            localStorage.setItem('token', data.token);
            this._snackbar.open(`
              Registration Successful: Try logging in.
            `);
          },
          err => {
            console.log('the error status in Reg is ', err.status);
            if (err.status == 400) {
              this.RegForm.controls.email.setErrors({
                notUnique: true
              });
              this._snackbar.open(`
              Registration unsuccessful:Try another email id.
            `);
            } else if (
              err.status === 0 &&
              err.message ===
                'Http failure response for http://localhost:3000/regData: 0 Unknown Error'
            ) {
              console.log(
                'Server connection error...Check whether server is working'
              );
              this._snackbar.open(`
                  Registration unsuccessful:Server is temporarily down
                `);
            } else if (err.status === 502) {
              console.log('error 502 ', err.error.message);
              if (err.error.message === 'there is database side error') {
                this._snackbar.open(`
                Registration unsuccessful:Database connection error
                `);
                console.log('There is database error', err);
              } else if (err.error.message === 'Error while inserting data') {
                this._snackbar.open(
                  `Registration unsuccessful:Error while inserting data`
                );
                console.log(
                  'Connected to database, error while inserting data in database'
                );
              } else {
                console.log('There is unknown error 502 ', err);
              }
            }

            this.emailExistError = 1;
            console.log('There is an error', err);
          }
        );
      }
    }
  }

  closeSnackbar() {
    this._snackbar.dismiss();
  }
}
