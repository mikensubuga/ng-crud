import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { dataType } from '../dataType';

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  //private apiUrl: string = 'http://localhost:5000/data';
  private apiUrl:string = "https://61099fe5d71b670017639a18.mockapi.io/api/v1/users"
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http:HttpClient){}

  getData(): Observable<dataType[]>{
    const url = "assets/sampleData.json";
    return this.http.get<dataType[]>(this.apiUrl);
  }

  addData(data: dataType): Observable<dataType[]>{
    return this.http.post<dataType[]>(this.apiUrl, data, {headers: this.headers})
    .pipe(
      catchError(this.error)
      )
  }

  handleDelete(data: dataType): Observable<dataType>{
    const url = `${this.apiUrl}/${data.id}`;
    return this.http.delete<dataType>(url);
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
