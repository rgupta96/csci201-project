import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectAuthTypePage } from './select-auth-type.page';

const routes: Routes = [
  {
    path: '',
    component: SelectAuthTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectAuthTypePageRoutingModule {}
