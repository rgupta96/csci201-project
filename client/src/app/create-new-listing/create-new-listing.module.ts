import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateNewListingPageRoutingModule } from './create-new-listing-routing.module';

import { CreateNewListingPage } from './create-new-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    CreateNewListingPageRoutingModule
  ],
  declarations: [CreateNewListingPage]
})
export class CreateNewListingPageModule {}
