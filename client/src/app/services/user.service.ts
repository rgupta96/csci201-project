import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import * as DB from '../../models/db-types';
import { URL } from './api';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  endpoint = URL + '/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createUser(user: DB.User): Observable<any> {
    return this.httpClient.post<DB.User>(this.endpoint, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<DB.User>('Error occured'))
      );
  }
  getUser(id): Observable<DB.User> {
    return this.httpClient.get<DB.User>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`User fetched: ${id}`)),
        catchError(this.handleError<DB.User>(`Get User id=${id}`))
      );
  }

  getUsers(): Observable<DB.User[]> {
    return this.httpClient.get<DB.User[]>(this.endpoint)
      .pipe(
        tap(users => console.log('Users retrieved!')),
        catchError(this.handleError<DB.User[]>('Get User', []))
      );
  }

  updateUser(id, user: DB.User): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        tap(_ => console.log(`User updated: ${id}`)),
        catchError(this.handleError<DB.User[]>('Update user'))
      );
  }

  deleteUser(id): Observable<DB.User[]> {
    return this.httpClient.delete<DB.User[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User deleted: ${id}`)),
        catchError(this.handleError<DB.User[]>('Delete user'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}
