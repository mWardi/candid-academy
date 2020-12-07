import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class RestaurantDataService {
  data: any;
  API_URL = 'http://localhost:1337';
  API_URI_RESTAURANTS = '/restaurants';

  constructor(public http: HttpClient, public user: UserData) {}

  load(): any {
    if (this.data) {
      return of(this.data);
    } else {
      return this.http
          .get(this.API_URL + this.API_URI_RESTAURANTS)
          .pipe(map(this.processData, this));
    }
  }

  processData(data: any) {
    // just some good 'ol JS fun with objects and arrays
    // build up the data by linking speakers to sessions
    this.data = data;

    // loop through restaurants
    this.data.forEach((restaurant: any) => {
      // make image urls absolute
      restaurant.cover.forEach((cover: any) => {
        cover.url = this.API_URL + cover.url;
      });
    });
    return this.data;
  }
}
