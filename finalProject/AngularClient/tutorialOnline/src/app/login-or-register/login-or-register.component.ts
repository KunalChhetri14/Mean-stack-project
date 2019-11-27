import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms'
import {passwordValidator, confirmPassValidator} from './customValidator'
@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.component.html',
  styleUrls: ['./login-or-register.component.css']
})
export class LoginOrRegisterComponent implements OnInit {
  RegForm:FormGroup;
  LoginForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.RegForm=this.fb.group({
      email:['',[Validators.required,
        Validators.pattern('[0-9a-zA-z]{5,}@[A-Za-z]+\.[A-Za-z]{2,}')
      ]],
      password:['',passwordValidator],
      confirmPassword:['',confirmPassValidator]
    });

    this.LoginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })


    this.RegForm.controls.password.valueChanges
    .subscribe(x=>
      this.RegForm.controls.confirmPassword.updateValueAndValidity())
   }

  ngOnInit() {}

  
  onRegSubmit()
  {
    this.RegForm.touched;
    if(this.RegForm.valid)
    {
      console.log('%c  Valid','style="color:blue;"')
      console.log(this.RegForm);
    console.log(this.RegForm.get('password'));
    }
    
  }

  onLoginSubmit()
  {
    this.LoginForm.touched;
    
  }

  

  

  log(val){
    console.log("inside log");
    console.log(val);
  }

}
