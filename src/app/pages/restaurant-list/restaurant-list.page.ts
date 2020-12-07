import { Component, OnInit } from '@angular/core';
import {RestaurantDataService} from '../../providers/restaurant-data.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit {
  restaurants: any[] = [];
  constructor(public restData: RestaurantDataService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.restData.load().subscribe((restaurants: any[]) => {
      this.restaurants = restaurants;
    });
  }
}
