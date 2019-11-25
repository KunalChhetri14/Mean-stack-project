import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.component.html',
  styleUrls: ['./login-or-register.component.css']
})
export class LoginOrRegisterComponent implements OnInit {

  constructor() { }

  LoginForm: FormGroup;
  RegForm: FormGroup;


 

  ngOnInit() {
    this.LoginForm=new FormGroup({
      email:new FormControl(null, [Validators.minLength(5),Validators.required]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      loginButton:new FormControl(),
      
    })

    this.RegForm=new FormGroup({
      email:new FormControl(null,Validators.required),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
      confirmPassword:new FormControl(null,Validators.required,this.dummyValidator)

    })

    


  }

  dummyValidator(control: FormControl) {
    console.log('checking...');
    console.log(control);
    return null;
  }

  

  

  log(val){
    console.log("inside log");
    console.log(val);
  }

}
