import { Component } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { Listing } from '../../models/listing.model';
import * as DB from '../../models/db-types';
@Component({
  selector: 'app-listings',
  templateUrl: 'listings.page.html',
  styleUrls: ['listings.page.scss'],
})
export class ListingsPage {
  listings: DB.Listing[];
  constructor(private data: ListingService) {

    this.data.getListings().subscribe((response) => {
      console.log(response);
      this.listings = response;
    });
  }

  // addProperty() {
  //   const data = {
  //     headline : "don't fuck with me",
  //     description: "this description will fuck you up",
  //     address : "Adamchik Residence, Moscow, Russia",
  //     amenities: "adamchik can suck my cock",
  //     price: 100,
  //     duration: 30
  //   }

  //   const toInsert = new Property(
  //     data.headline,
  //     data.description,
  //     data.address,
  //     data.amenities,
  //     data.price,
  //     data.duration
  //   );
  //   console.log(JSON.stringify(toInsert));
  //   this.data.createProperty(toInsert).subscribe(r => {
  //     console.log(r);
  //   });
  // }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

}
