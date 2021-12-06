import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/models/property.model';
import { PropertyService } from '../services/property.service';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ListingService } from '../services/listing.service';
import { User } from 'src/models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-my-specific-listing',
  templateUrl: './my-specific-listing.page.html',
  styleUrls: ['./my-specific-listing.page.scss'],
})

export class MySpecificListingPage {
  property: Property;

  propData: FormGroup;
  user: User;

  constructor(
    private router: Router,
    private listingService: ListingService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private propertyService: PropertyService,
    private userService: UserService
  ) {
    this.propData = new FormGroup({
      headline: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      amenities: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
    });
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        console.log(this.router.getCurrentNavigation().extras.state);
        this.user= this.router.getCurrentNavigation().extras.state.user;
        this.property = this.router.getCurrentNavigation().extras.state.property;
      }
    });
  }

  updateListing() {
    const submission = {
      headline: (this.propData.value.headline == '') ? this.property.headline : this.propData.value.headline,
      description: (this.propData.value.description == '') ? this.property.description : this.propData.value.description,
      address: (this.propData.value.address == '') ? this.property.address : this.propData.value.address,
      amenities: (this.propData.value.amenities == '') ? this.property.amenities : this.propData.value.amenities,
      price: (this.propData.value.price == '') ? this.property.price : this.propData.value.price,
      duration: (this.propData.value.duration == '') ? this.property.duration : this.propData.value.duration,
    }
    const updatedProperty = new Property(
      submission.headline,
      submission.description,
      submission.address,
      submission.amenities,
      submission.price,
      submission.duration
    );
    console.log(submission);
    this.propertyService.updateProperty(this.property.id, updatedProperty).subscribe(r => {
      this.router.navigate(['/my-properties', this.user]);
    });
  }

  deleteListing() {
    this.listingService.getListingsByPropertyId(this.property.id).subscribe(r => {
      console.log(r[0]);
      this.listingService.deleteListing(r[0].id).subscribe(r => {
        this.router.navigate(['/my-properties', this.user]);
      });
    });
  }
}
