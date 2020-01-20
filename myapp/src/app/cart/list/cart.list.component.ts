import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart.list.component.html',
    styleUrls:['/cart.list.component.css']
})

export class CartListComponent implements OnInit 
{
    customer_id:''
    product_id:''
    cart:[]
    constructor(private router: Router,private cartService : CartService) 
    {
        this.customer_id=sessionStorage['customer_id']
        this.loadCart()
     }

    ngOnInit() { }
    loadCart(){
        this.cartService.getCartItem(this.customer_id)
        .subscribe(response => {
            if(response['status'] == 'success')
            {
                    this.cart = response['data']
                    console.log(this.cart);
                    
                
            }
            else{
                console.log(response['error']);
            }

        });
      
  }
   

        
    }
