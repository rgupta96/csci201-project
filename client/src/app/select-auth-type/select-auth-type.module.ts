import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectAuthTypePageRoutingModule } from './select-auth-type-routing.module';

import { SelectAuthTypePage } from './select-auth-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectAuthTypePageRoutingModule
  ],
  declarations: [SelectAuthTypePage]
})
export class SelectAuthTypePageModule {}
