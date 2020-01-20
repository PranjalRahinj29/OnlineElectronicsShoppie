import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';



@Injectable()
export class OfferService{

http:HttpClient
    url='http://localhost:4000/offer'


    constructor(httpClient:HttpClient)
    {
        this.http=httpClient 
    }

    getAllOffers()
    {
        return this.http.get(this.url)
    }

    addoffer(offer_detail:String)
    {

        const body={
             offer_detail:offer_detail
        }

        return this.http.post(this.url,body)

    }
    deleteOffer(offer_id: number) {
        return this.http.delete(this.url + '/' + offer_id)
      }
}