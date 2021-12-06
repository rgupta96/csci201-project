import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/models/property.model';
import { User } from 'src/models/user.model';
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
  user: User;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listingService: ListingService,
    private userService: UserService
  ) {
    this.route.queryParams.subscribe(p => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state);
        this.user= this.router.getCurrentNavigation().extras.state.user;
        this.property = this.router.getCurrentNavigation().extras.state.property;
      }
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
