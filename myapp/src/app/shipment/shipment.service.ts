import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';






@Injectable()
export class ShipmentService
{
    http:HttpClient
    url='http://localhost:4000/shipment'


    constructor(httpClient:HttpClient)
    {
        this.http=httpClient 
    }

    getAllShipments()
    {
        return this.http.get(this.url)
    }

    addshipment(shipment_name:String)
    {

        const body={
            shipment_name:shipment_name
        }

        return this.http.post(this.url,body)

    }
    deleteshipment(shipment_id: number) {
        return this.http.delete(this.url + '/' + shipment_id)
      }

}