import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Property } from '../../models/property.model';
import { UserService } from '../services/user.service';
import { ListingService } from '../services/listing.service';
import * as DB from '../../models/db-types';
import { PropertyService } from '../services/property.service';

export interface UserWithProperty {
  userId: number;
  property: Property;
}

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.page.html',
  styleUrls: ['./my-properties.page.scss'],
})

export class MyPropertiesPage {

  user: User;
  myListings: DB.Listing[];
  myProperties: Property[] = new Array<Property>();

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private userService: UserService,
    private listingService: ListingService,
    private propertyService: PropertyService
  ) {
    this.route.queryParams.subscribe(p => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state);
        this.user = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.user);
      }
    });
  }

  openSpecificListing(property: Property) {
    // const uwp: UserWithProperty = {
    //   userId: this.user.id,
    //   property
    // }
    let navigationExtras: NavigationExtras = { state: { user: this.user, property } };

    this.router.navigate(['/my-properties/my-specific-listing/', property.id], navigationExtras);
  }
  openCreateListing() {
    let navigationExtras: NavigationExtras = { state: { user: this.user } };
    this.router.navigate(['/my-properties/create-new-listing', this.user.id], navigationExtras);
  }
  ionViewDidEnter() {
    this.myListings = [];
    this.myProperties = [];
    console.log('here');
    const parameters = {
      user_id: this.user.id
    };
    this.listingService.getListings(parameters).subscribe(listings => {
      this.myListings = listings;
      if(this.myListings != null) {
        this.myListings.sort((a,b) => (b.id - a.id));
        console.log(this.myListings);
        listings.forEach(listing => {
          console.log(listing);
          this.propertyService.getProperty(listing.propertyId).subscribe(p => {
            this.myProperties.push(
              new Property(p.headline,p.description,p.address, p.amenities, p.price, p.duration, p.id)
            );
          });
        });
      }
    });

  }
}
