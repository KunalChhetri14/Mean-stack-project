import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


interface format{
  email:string;
  password:string;
  confirmPassword:string;
}

@Injectable({
  providedIn: 'root'
})


export class ServiceTutorialOnlineService {
  regSubmittedData = {};
  loginData={};
  constructor(private http: HttpClient) {}

  public Login(loginDetails):Observable<any>{
    this.loginData['email']=loginDetails.email;
    this.loginData['password']=loginDetails.password;
    return this.http
      .post<any>('http://localhost:3000/Login',this.loginData)
      .pipe(catchError((err)=>{
        console.log("Error in login service");
        return throwError(err);
      }))
  }

  public SignUp(details): Observable<any> {
    // this.regSubmittedData = details;
    this.regSubmittedData['email']=details.email;
    this.regSubmittedData['password']=details.password;
    this.regSubmittedData['confPass']=details.confirmPassword;
    console.log('Service api called');
    

    return this.http
      .post<any>('http://localhost:3000/SignUp', this.regSubmittedData)
      .pipe(catchError(this.errHandler));
  }
  public errHandler(err: HttpErrorResponse) {
    console.log('Error handler in service');
    return throwError(err);
  }
}
