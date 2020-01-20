import { Component, OnInit } from '@angular/core';
import { ProductScreenService } from '../productscreen.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-productscreen-add',
    templateUrl: 'productscreen.add.component.html',
    styleUrls: ['./productscreen.add.component.css']
})

export class ProductScreenComponent implements OnInit {
    products:any[]
    product_id = 0

    
  constructor(
    private router: Router,
    private productScreenService: ProductScreenService) 
    {
      this.productScreenService
      .getAllProducts()
      .subscribe(response =>{
        if(response['status']=='success')
        {
          this.products = response['data']
          console.log(this.products)
        }
        else{
          console.log(response['error'])
        }
      })
      // this.showAllProducts()
    }
    ngOnInit(){}
    showAllProducts(product_id: number)
    {
      console.log(product_id)
      this.router.navigate(['/details'+'/'+product_id])
    }
  }