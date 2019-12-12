import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface format {
  email: string;
  password: string;
  confirmPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceTutorialOnlineService {
  regSubmittedData = {};
  loginData = {};
  submittedCourse={};
  constructor(private http: HttpClient) {}

  public Login(loginDetails): Observable<any> {
    this.loginData['email'] = loginDetails.email;
    this.loginData['password'] = loginDetails.password;
    return this.http
      .post<any>('http://localhost:3000/Login', this.loginData)
      .pipe(
        catchError(err => {
          console.log('Error in login service');
          return throwError(err);
        })
      );
  }

  public SignUp(details): Observable<any> {
    // this.regSubmittedData = details;
    this.regSubmittedData['email'] = details.email;
    this.regSubmittedData['password'] = details.password;
    this.regSubmittedData['confPass'] = details.confirmPassword;
    console.log('Service api called');

    return this.http
      .post<any>('http://localhost:3000/SignUp', this.regSubmittedData)
      .pipe(catchError(this.errHandler));
  }
  public errHandler(err: HttpErrorResponse) {
    console.log('Error handler in service');
    return throwError(err);
  }


  //Getting the course details
  public getAllCourses():Observable<any>{
    return this.http
      .get<any>('http://localhost:3000/getAllCourses')
      .pipe(catchError(this.errHandler));
  }

  //Getting the subtopics for Course-side-topic components
  public getSubTopics(selected_Course):Observable<any>{
    console.log("Inside service of getSubtopics ",selected_Course);
    this.submittedCourse['courseName'] = selected_Course;
    return this.http
    .post<any>('http://localhost:3000/getSubTopics',this.submittedCourse)
    .pipe(catchError(this.errHandler));
  }
}
