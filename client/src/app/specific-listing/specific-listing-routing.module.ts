import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecificListingPage } from './specific-listing.page';

const routes: Routes = [
  {
    path: '',
    component: SpecificListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecificListingPageRoutingModule {}
