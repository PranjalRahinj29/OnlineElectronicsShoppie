import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';




@Injectable()
export class CartService{
    url = 'http://localhost:4000/cart'

    
    constructor(private http: HttpClient) 
    {
    }
    getCartItem(product_id){
        return this.http.get(this.url+'/'+product_id)

    }

}

