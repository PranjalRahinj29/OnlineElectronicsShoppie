import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ProductService {

  http: HttpClient
  url = 'http://localhost:4000/product'

  constructor(httpClient: HttpClient) {
    this.http = httpClient
  }

  getAllProducts() {
    return this.http.get(this.url)
  }

  addProduct(product_name: string,shipment_id:number,product_price: number,product_description: string,category_id: number,subcategory_id:number,thumbnail:string) {
    const body = {
      product_name:product_name,
      shipment_id:shipment_id,
      product_price:product_price,
      product_description: product_description,
      category_id: category_id,
      subcategory_id:subcategory_id,
      thumbnail:thumbnail
    }

    return this.http.post(this.url, body)
  }

  updateProduct() {
  }

  deleteProduct(id: number) {
  }

}
