import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductScreenService } from '../productscreen.service';

@Component({
    selector: 'app-productscreen-details',
    templateUrl: 'productscreen.details.component.html',
    styleUrls: ['./productscreen.details.component.css']
})

export class ProductScreenDetails implements OnInit {
    product = []
    cart:any
    product_id: 0
    //cart_id:0
   // customer_id:0
    constructor(private router: Router,
        private productScreenService: ProductScreenService,
        private activatedRoute: ActivatedRoute) {
            //this.customer_id=sessionStorage['customer_id']
            //this.product_id = sessionStorage['product_id']
            this.product_id =  this.activatedRoute.snapshot.params['id']
            console.log(this.product_id)
            if(this.product_id){
                this.productScreenService.getProductDetails(this.product_id)
                .subscribe(response => {
                    if (response['status'] == 'success') {

                      this.product = response['data']
                      console.log(this.product)

                    }
                  })
            }
            this.getProduct(this.product_id)
         }


        onAddToCart(product_name,product_price){
        this.productScreenService.onAddToCart(this.product_id,product_name,product_price)
        .subscribe(response=>{
            if(response['status']=='success'){
                this.cart=response['data']
                console.log('cart called')
                console.log(this.cart)
                console.log('Item Added To Cart')

            }
            else{
                console.log(response['error']);

            }
        })
        //this.router.navigate(['/details'])
       // this.router.navigate
    }
    ngOnInit() { }

    getProduct(product_id){
        this.productScreenService
        .getProductDetails(this.product_id)
        .subscribe(response => {
            if (response['status'] == 'success') {

              this.product = response['data']
              console.log(this.product)

            }
          })
    }
    }

    
   
    
   
    
    


