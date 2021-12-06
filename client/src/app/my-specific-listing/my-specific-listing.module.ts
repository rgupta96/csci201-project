import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { MySpecificListingPageRoutingModule } from './my-specific-listing-routing.module';

import { MySpecificListingPage } from './my-specific-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    MySpecificListingPageRoutingModule
  ],
  declarations: [MySpecificListingPage]
})
export class MySpecificListingPageModule {}
