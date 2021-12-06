import { Component } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { Listing } from '../../models/listing.model';
import * as DB from '../../models/db-types';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/models/property.model';
import { PropertyService } from '../services/property.service';

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
    public router: Router
  ) {
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
          this.allProperties.push(
            new Property(p.headline,p.description,p.address, p.amenities, p.price, p.duration, p.id)
          );
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
