import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  
  public errHandler(err: HttpErrorResponse) {
    console.log('Error handler in service');
    return throwError(err);
  }

  public insertNewContent(contentDetails): Observable<number>{
    
    return this.http
        .post<any>('http://localhost:3000/insertNewContent', contentDetails)
        .pipe(
          map((response: any) => {
            return response.id;
          }),catchError(this.errHandler));
  }
}
