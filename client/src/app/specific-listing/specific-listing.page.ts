import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Property } from 'src/models/property.model';
// import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { ListingService } from '../services/listing.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-specific-listing',
  templateUrl: './specific-listing.page.html',
  styleUrls: ['./specific-listing.page.scss'],
})
export class SpecificListingPage {
  property: any;
  listerEmail: string;
  constructor(
    // private emailComposer: EmailComposer,
    private route: ActivatedRoute,
    private listingService: ListingService,
    private userService: UserService
  ) {
    this.route.params.subscribe(p => {
      console.log(p);
      this.property = p;
    });
  }

  contactLister() {
    let url = "mailto:" + this.listerEmail + "?subject=Interested in Your Property";
    window.open(url);
  }

  ionViewDidEnter() {
    this.listingService.getListingsByPropertyId(this.property.id).subscribe(listings => {
      console.log(listings[0]);
      this.userService.getUser(listings[0].userId).subscribe(u => {
        this.listerEmail = u.email;
        console.log(this.listerEmail);
      });
    });
  }



}
