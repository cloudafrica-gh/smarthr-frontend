import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DafabetService {
  private dafabetUrl: string = environment.dafabetUrl;
  public headers: HttpHeaders;

  constructor( private readonly http: HttpClient) { }
  getAllDafabetTransactions(): Observable<any> {
    return this.http
      .get(`${this.dafabetUrl}`)
      .pipe(
        tap(data => console.log('get all realtime dafabet transactions >>>>> ', data)),
        catchError(this.handleError('dafabetApi', []))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}

