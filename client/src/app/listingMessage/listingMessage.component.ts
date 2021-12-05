import { Component, OnInit, Input } from '@angular/core';
import { Listing } from '../../models/db-types';

@Component({
  selector: 'listing-message',
  templateUrl: './listingMessage.component.html',
  styleUrls: ['./listingMessage.component.scss'],
})
export class ListingMessageComponent implements OnInit {
  @Input() listing: Listing;

  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
