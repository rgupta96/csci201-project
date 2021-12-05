import { Component } from '@angular/core';
import { PropertyService } from '../services/property.service';
import { Property } from '../../models/property.model';
import * as DB from '../../models/db-types';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  properties: DB.Property[];
  constructor(private data: PropertyService) {

    this.data.getProperties().subscribe((response) => {
      console.log(response);
      this.properties = response;
    });
  }

  addProperty() {
    const data = {
      headline : "don't fuck with me",
      description: "this description will fuck you up",
      address : "Adamchik Residence, Moscow, Russia",
      amenities: "adamchik can suck my cock",
      price: 100,
      duration: 30
    }

    const toInsert = new Property(
      data.headline,
      data.description,
      data.address,
      data.amenities,
      data.price,
      data.duration
    );
    console.log(JSON.stringify(toInsert));
    this.data.createProperty(toInsert).subscribe(r => {
      console.log(r);
    });
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

}
