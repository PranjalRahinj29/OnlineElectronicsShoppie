import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product.add.component.html',
  styleUrls: ['./product.add.component.css']
})

export class ProductAddComponent implements OnInit {

  categories: any[]

  product_id: string
  product_name: string
  shipment_id: number
  product_price:number
  product_description:string
  category_id:number
  productService: ProductService
  subcategory_id:number
  thumbnail:string

  constructor(
    private router: Router,
    categoryService: CategoryService,
    productService: ProductService) {

    this.productService = productService

    categoryService
      .get()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.categories = response['data']

          // select the first category by default
          const category = this.categories[0]
          this.category_id = category.id
        }
      })
  }

  ngOnInit() { }
  onSelectFile(event) {
    this.thumbnail = event.target.files[0]
  }

  onAdd() {
    // console.log('title: ', this.title)
    // console.log('description: ', this.description)
    // console.log('price: ', this.price)
    // console.log('categoryId: ', this.categoryId)

    this.productService
      .addProduct(this.product_name, this.shipment_id,this.product_price,this.product_description,this.category_id,this.subcategory_id,this.thumbnail)
      .subscribe(response => {
        if (response['status'] == 'success') {
          alert('added product')
          this.router.navigate(['/app-product-list'])
        } else {
          alert('error while adding product')
          console.log(response['error'])
        }
      })
  }
}