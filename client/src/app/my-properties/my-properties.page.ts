import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Property } from '../../models/property.model';
import { UserService } from '../services/user.service';
import { ListingService } from '../services/listing.service';
import * as DB from '../../models/db-types';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.page.html',
  styleUrls: ['./my-properties.page.scss'],
})
export class MyPropertiesPage {

  user: User;
  myListings: DB.Listing[];
  myProperties: Property[] = new Array<Property>();
  listingsMap
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private userService: UserService,
    private listingService: ListingService,
    private propertyService: PropertyService
  ) {
    this.userService.getUser(1).subscribe(u => {
      console.log(u);
      this.user = new User(
        u.firstName,
        u.lastName,
        u.userType,
        u.loginType,
        u.dateCreated,
        1
      );
      console.log(this.user);
    });



  }

  openSpecificListing(property: Property) {

    this.router.navigate(['/my-properties/my-specific-listing/', property]);
  }
  openCreateListing() {
    this.router.navigate(['/my-properties/create-new-listing']);
  }
  ionViewDidEnter() {
    this.myListings = [];
    this.myProperties = [];
    console.log('here');
    const parameters = {
      user_id: 1
    };
    this.listingService.getListings(parameters).subscribe(listings => {
      this.myListings = listings;
      console.log(this.myListings);
      listings.forEach(listing => {
        console.log(listing);
        this.propertyService.getProperty(listing.propertyId).subscribe(p => {
          this.myProperties.push(
            new Property(p.headline,p.description,p.address, p.amenities, p.price, p.duration, p.id)
          );
        });
      });
    });
    console.log(this.myProperties);
  }
}
