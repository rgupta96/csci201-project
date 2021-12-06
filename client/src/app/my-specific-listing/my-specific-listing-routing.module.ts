import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySpecificListingPage } from './my-specific-listing.page';

const routes: Routes = [
  {
    path: '',
    component: MySpecificListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySpecificListingPageRoutingModule {}
