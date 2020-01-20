import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer.service';

import { Router } from '@angular/router';



@Component({
    selector: 'app-offer-list',
    templateUrl: 'offer.list.component.html',
    styleUrls:['offer.list.component.css']
})

export class OfferListComponent implements OnInit {
    offers :any[]=[]
    constructor(private router:Router,
        private offerService:OfferService) 
    {
        this.loadoffers()
    }
    loadoffers()
    {
        this.offerService
        .getAllOffers()
        .subscribe(response => {
            if (response['status'] == 'success') {
              this.offers = response['data']
            }
          })
    }
    onAddOffer()
    {
        this.router.navigate(['/offer-add'])
    }

    ngOnInit() { }
    onDelete(offer_id: number) {
        this.offerService
          .deleteOffer(offer_id)
          .subscribe(response => {
            if (response['status'] == 'success') {
              this.loadoffers()
            } else {
              console.log(response['error'])
            }
          })
      }
}