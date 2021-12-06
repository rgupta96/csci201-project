import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import * as DB from '../../models/db-types';
import { URL } from './api';
@Injectable({
  providedIn: 'root'
})
export class ListingService {
  endpoint = URL + '/listings';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  createListing(listing: DB.Listing): Observable<any> {
    return this.httpClient.post<DB.Listing>(this.endpoint, JSON.stringify(listing), this.httpOptions)
      .pipe(
        catchError(this.handleError<DB.Listing>('Error occured'))
      );
  }
  getListing(id): Observable<DB.Listing> {
    return this.httpClient.get<DB.Listing>(this.endpoint + '/' + id)
      .pipe(
        tap(_ => console.log(`Listing fetched: ${id}`)),
        catchError(this.handleError<DB.Listing>(`Get property id=${id}`))
      );
  }

  getListingsByPropertyId(property_id): Observable<DB.Listing> {
    return this.httpClient.get<DB.Listing>(this.endpoint + '/property/' + property_id)
      .pipe(
        tap(_ => console.log(`Listings fetched: ${property_id}`)),
        catchError(this.handleError<DB.Listing>(`Get property id=${property_id}`))
      );
  }

  getListings(parameters?): Observable<DB.Listing[]> {
    let params = new HttpParams();
    params = params.append('user_id', parameters.user_id);
    return this.httpClient.get<DB.Listing[]>(this.endpoint, { params : params })
      .pipe(
        tap(listings => console.log('Listings retrieved!')),
        catchError(this.handleError<DB.Listing[]>('Get listing', []))
      );
  }


  updateListing(id, listing: DB.Listing): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(listing), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Listing updated: ${id}`)),
        catchError(this.handleError<DB.Listing[]>('Update listing'))
      );
  }

  deleteListing(id): Observable<DB.Listing[]> {
    return this.httpClient.delete<DB.Listing[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Listing deleted: ${id}`)),
        catchError(this.handleError<DB.Listing[]>('Delete listing'))
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
