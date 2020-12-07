import { Component, OnInit } from '@angular/core';
import {RestaurantDataService} from '../../providers/restaurant-data.service';
import {ActivatedRoute} from '@angular/router';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.page.html',
  styleUrls: ['./restaurant-details.page.scss'],
})
export class RestaurantDetailsPage implements OnInit {
  restaurant: any;

  constructor(
      private dataProvider: RestaurantDataService,
      private route: ActivatedRoute,
      public actionSheetCtrl: ActionSheetController,
      public confData: RestaurantDataService
  ) { }

  ngOnInit() {
    this.dataProvider.load().subscribe((data: any) => {
      const restaurantId = this.route.snapshot.paramMap.get('id');
      if (data) {
        for (const restaurant of data) {
          if (restaurant && restaurant.id == restaurantId) {
            this.restaurant = restaurant;
            break;
          }
        }
      }
    });
  }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const restaurantId = this.route.snapshot.paramMap.get('id');
      if (data) {
        for (const restaurant of data) {
          if (restaurant && restaurant.id === restaurantId) {
            this.restaurant = restaurant;
            break;
          }
        }
      }
    });
  }
}
