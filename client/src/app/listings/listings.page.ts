import { Component } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { Listing } from '../../models/listing.model';
import * as DB from '../../models/db-types';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/models/property.model';
import { PropertyService } from '../services/property.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listings',
  templateUrl: 'listings.page.html',
  styleUrls: ['listings.page.scss'],
})
export class ListingsPage {
  listings: DB.Listing[];
  allProperties: Property[];
  properties: Property[];
  constructor(
    private listingService: ListingService,
    private propertyService: PropertyService,
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController
  ) {
  }

  filterItems() {
    this.alertCtrl.create({
      header: "Filter listings",
      message: 'Filter your properties!',
      inputs: [
        {
          name: 'price',
          type: 'number',
          placeholder: 'Max Price'
        },
        {
          name: 'minDuration',
          type: 'number',
          placeholder: 'Minimim Duration'
        },
        {
          name: 'maxDuration',
          type: 'number',
          placeholder: 'Maximum Duration'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Filter',
          handler: (data: any) => {
            this.properties = this.allProperties;
            const maxPrice = (data.price == '') ? Infinity : data.price;
            const minDuration = (data.minDuration == '') ? 0 : data.minDuration;
            const maxDuration = (data.maxDuration == '') ? Infinity : data.maxDuration;
            console.log(maxPrice, minDuration, maxDuration);
            this.properties = this.properties.filter((a) => {
              if(
                a.price <= maxPrice &&
                a.duration >= minDuration &&
                a.duration <= maxDuration
              ) {
                console.log(a);
                return true;
              } else {
                return false
              }
            });
            console.log(this.properties);
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  ionViewDidEnter() {
    this.listings = [];
    this.properties = [];
    this.allProperties = [];
    console.log('here');
    const parameters = {
      user_id: 0
    };
    this.listingService.getListings(parameters).subscribe(listings => {
      this.listings = listings;
      this.listings.sort((a,b) => (b.id - a.id));
      listings.forEach(listing => {
        console.log(listing);
        this.propertyService.getProperty(listing.propertyId).subscribe(p => {
          const prop = new Property(p.headline,p.description,p.address, p.amenities, p.price, p.duration, p.id);
          this.allProperties.push(prop);
          this.properties.push(prop);
        });
      });
    });

  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  openSpecificListing(property: Property) {

    this.router.navigate(['/listings/specific-listing/', property]);
  }

}
