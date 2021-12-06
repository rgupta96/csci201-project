import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/models/property.model';
import { PropertyService } from '../services/property.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ListingService } from '../services/listing.service';
import { AlertController } from '@ionic/angular';
import { Listing } from 'src/models/listing.model';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-create-new-listing',
  templateUrl: './create-new-listing.page.html',
  styleUrls: ['./create-new-listing.page.scss'],
})
export class CreateNewListingPage {

  property: Property;

  propData: FormGroup;
  user: User;

  constructor(
    private alertCtrl: AlertController,
    private router: Router,
    private listingService: ListingService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private propertyService: PropertyService
  ) {
    this.route.params.subscribe(p => {
      this.user = new User(
        p.firstName,
        p.lastName,
        p.userType,
        p.loginType,
        p.dateCreated,
        p.email,
        p.id
      );
    });
    this.propData = new FormGroup({
      headline: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      amenities: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
    });
  }

  addListing() {
    if (
      this.propData.value.headline == "" ||
      this.propData.value.description == "" ||
      this.propData.value.address == "" ||
      this.propData.value.amenities == "" ||
      this.propData.value.price == "" ||
      this.propData.value.duration == ""
    ) {
        this.alertCtrl.create({
          header: "Warning",
          subHeader: "please fill in all fields",
          buttons: ["OK"]
        }).then(res => {
          res.present();
        });
      } else {
        const submission = {
          headline: this.propData.value.headline,
          description: this.propData.value.description,
          address: this.propData.value.address,
          amenities: this.propData.value.amenities,
          price: this.propData.value.price,
          duration: this.propData.value.duration,
        }
        const property = new Property(
          submission.headline,
          submission.description,
          submission.address,
          submission.amenities,
          submission.price,
          submission.duration
        );
        console.log(submission);
        this.propertyService.createProperty(property).subscribe(r => {
          console.log(r.id);
          const listing = new Listing(this.user.id, r.id, Date.now(), 0);
          this.listingService.createListing(listing).subscribe(re => {
            console.log(re);
            this.router.navigate(['/my-properties', this.user]);
          });
        })
      }
  }

}
