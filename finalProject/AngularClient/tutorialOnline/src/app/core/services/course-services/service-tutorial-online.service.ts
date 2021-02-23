import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { subTopicModel } from '../../models/dataModel';

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
  submittedCourse = {};
  constructor(private http: HttpClient, private _router: Router) {}

  //Defining subject for LogOut Button

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
  public getAllCourses(): Observable<string[]> {
    return this.http
      .get<any>('http://localhost:3000/getAllCourses')
      .pipe(
        map((item: any) => {
          return item[0].Courses;
        }),catchError(this.errHandler));
  }

  //Getting the subtopics for Course-side-topic components
  public getSubTopics(selected_Course): Observable<subTopicModel[]> {
    console.log('Inside service of getSubtopics ', selected_Course);
    this.submittedCourse['courseName'] = selected_Course;
    return this.http
      .post<any>('http://localhost:3000/getSubTopics', this.submittedCourse)
      .pipe(
        map((response: any) => {
          const subTopics: Array<subTopicModel> = response.map(item=> {
            return {
              subTopic: item.subTopic,
              subTopicId: item._id
            } as subTopicModel
          })
          return subTopics;
        }),catchError(this.errHandler));
  }

  public getSubTopicsContents(
    selected_id: number,
    courseName: string
  ): Observable<subTopicModel[]> {
    let submittedDetails = { subTopicId: selected_id, courseName: courseName };

    return this.http
      .post<any>('http://localhost:3000/getsubTopicsDetails', submittedDetails)
      .pipe(
        map((response: any) => {
          const subTopics: Array<subTopicModel> = response.map(item=> {
            return {
              subTopic: item.subTopic,
              subTopicId: item._id,
              content: item.content
            } as subTopicModel
          })
          return subTopics;
        }), catchError(this.errHandler));
  }
  //Checking whether logged in or not
  loginedIn() {
    return !!localStorage.getItem('token');
  }

  LogOutUser() {
    localStorage.removeItem('token');
    this._router.navigateByUrl('/login');
  }
}
