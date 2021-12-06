import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecificListingPageRoutingModule } from './specific-listing-routing.module';

import { SpecificListingPage } from './specific-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecificListingPageRoutingModule
  ],
  declarations: [SpecificListingPage]
})
export class SpecificListingPageModule {}
