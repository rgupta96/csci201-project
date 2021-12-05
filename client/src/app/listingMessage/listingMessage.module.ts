import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListingMessageComponent } from './listingMessage.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [ListingMessageComponent],
  exports: [ListingMessageComponent]
})
export class ListingMessageComponentModule {}
