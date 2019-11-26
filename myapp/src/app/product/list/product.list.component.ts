import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product.list.component.html',
  styleUrls: ['./product.list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any[] = []

  constructor(
    private router: Router,
    private service: ProductService) {
      this.loadAllProducts()
  }

  loadAllProducts() {
    this.service
      .getAllProducts()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']
        } else {
          alert('error')
        }
      })
  }

  ngOnInit() {
  }

  onAddProduct() {
    this.router.navigate(['/product-add'])
  }

  

}