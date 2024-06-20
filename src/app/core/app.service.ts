import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DatePipe, Location } from '@angular/common';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AppService {
  private token;

  constructor(
    protected http: HttpClient,
    protected router: Router,
    public datepipe: DatePipe,
    private location: Location
  ) {
    this.token = this.currentUserValue();
    if (this.token == null) {
      this.router.navigate(['/authentication/signin']).then(() => {});
    }
  }

  public currentUserValue() {
    return JSON.parse(localStorage.getItem('currentUser') as string);
  }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.currentUserValue() ? this.currentUserValue().token : ''
    }),
  };

  // Service HTTP Request GET
  get(url: any, data: any): Observable<any> {
    return this.http.get(environment.apiUrl + url, this.httpOptions).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, ${err.statusText}`;
    }
    return throwError(errorMessage);
  }
}
