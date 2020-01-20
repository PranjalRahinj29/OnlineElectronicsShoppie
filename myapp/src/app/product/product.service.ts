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

  addProduct(product_name: string,shipment_id:number,product_price: number,product_description: string,category_id: number,subcategory_id:number,thumbnail:any) {
    console.log(product_description)
    const body = new FormData()
    {
      shipment_id=1
     body.append('product_name',product_name) 
     body.append('shipment_id',''+shipment_id) 
     body.append('product_price',''+product_price) 
     body.append('product_description',product_description) 
     body.append('category_id',''+category_id) 
     body.append('subcategory_id',''+subcategory_id) 
     body.append('thumbnail',thumbnail) 
      
    }

    return this.http.post(this.url, body)
  }

  updateProduct() {
  }

  

  deleteProduct(product_id: number) {
    return this.http.delete(this.url + '/' + product_id)
  }

}
