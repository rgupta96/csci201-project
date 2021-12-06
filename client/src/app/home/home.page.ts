import { Component } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { Property } from '../../models/property.model';
import { UserService } from '../services/user.service';
import { User } from '../../models/user.model';
import { ListingService } from '../services/listing.service';
import { Listing } from '../../models/listing.model';

import * as DB from '../../models/db-types';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  properties: DB.Property[];
  users: DB.User[];
  listings: DB.Listing[];
  constructor(private propertyData: PropertyService, private userData: UserService, private listingData: ListingService) {

    this.propertyData.getProperties().subscribe((response) => {
      console.log(response);
      this.properties = response;
    });

    this.userData.getUsers().subscribe((response) => {
      console.log(response);
      this.users = response;
    });
    const parameters = {
      user_id: 0
    };
    this.listingData.getListings(parameters).subscribe((response) => {
      console.log(response);
      this.listings = response;
    });
  }

  addProperty() {
    const data = {
      headline : "don't fuck with me",
      description: "this description will fuck you up",
      address : "Adamchik Residence, Moscow, Russia",
      amenities: "adamchik can suck my cock",
      price: 100,
      duration: 30
    }

    const toInsert = new Property(
      data.headline,
      data.description,
      data.address,
      data.amenities,
      data.price,
      data.duration
    );
    console.log(JSON.stringify(toInsert));
    this.propertyData.createProperty(toInsert).subscribe(r => {
      console.log(r);
    });
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

}
