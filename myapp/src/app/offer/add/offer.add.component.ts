
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { OfferService } from '../offer.service';

@Component({
    selector: 'app-offer-component',
    templateUrl: 'offer.add.component.html',
    styleUrls:['./offer.add.component.css']
})

export class OfferAddComponent implements OnInit {


    offers:any[]

    offer_id:number
    offer_detail:String
    offerService:OfferService
    constructor(private router:Router,
                 offerService:OfferService )
         { 
              this.offerService=offerService

            offerService
            .getAllOffers()
            .subscribe(response=>{
                if(response['status']=='success'){
                    this.offers=response['data']



                    const offer=this.offers[0]
                    this.offer_id=this.offer_id
                }
            })
         }

    ngOnInit() { }

    onAdd() {
       
    
        this.offerService
          .addoffer(this.offer_detail)
          .subscribe(response => {
            if (response['status'] == 'success') {
              alert('added offer')
              this.router.navigate(['/app-offer-list'])
            } else {
              alert('error while adding offer')
              console.log(response['error'])
            }
          })
      }
    }
