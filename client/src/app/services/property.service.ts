import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import * as DB from '../../models/db-types';
import { URL } from './api';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  endpoint = URL + '/properties';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createProperty(property: DB.Property): Observable<any> {
    return this.httpClient.post<DB.Property>(this.endpoint, JSON.stringify(property), this.httpOptions)
      .pipe(
        catchError(this.handleError<DB.Property>('Error occured'))
      );
  }
  getProperty(id): Observable<DB.Property> {
    return this.httpClient.get<DB.Property>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Property fetched: ${id}`)),
        catchError(this.handleError<DB.Property>(`Get property id=${id}`))
      );
  }

  getProperties(): Observable<DB.Property[]> {
    return this.httpClient.get<DB.Property[]>(this.endpoint)
      .pipe(
        tap(properties => console.log('Properties retrieved!')),
        catchError(this.handleError<DB.Property[]>('Get property', []))
      );
  }

  updateProperty(id, property: DB.Property): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(property), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Property updated: ${id}`)),
        catchError(this.handleError<DB.Property[]>('Update property'))
      );
  }

  deleteProperty(id): Observable<DB.Property[]> {
    return this.httpClient.delete<DB.Property[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Property deleted: ${id}`)),
        catchError(this.handleError<DB.Property[]>('Delete property'))
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
