import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';





@Injectable()
export class ProductScreenService
{
    http:HttpClient
    url='http://localhost:4000/productscreen/2'
    url1='http://localhost:4000/productscreen'


    constructor(httpClient: HttpClient) 
    {
        this.http = httpClient
    }
      getAllProducts() 
    {
        return this.http.get(this.url)
    }
    // addproductscreen( product_name: string,shipment_id: number,product_price:number,product_description:string,category_id:number, subcategory_id:number,thumbnail:string) {
    //     const body = 
    //     {
    //       product_name   : product_name,
    //       shipment_id: shipment_id,
    //       product_price:product_price,
    //       product_description:product_description,
    //       category_id :category_id,
    //       subcategory_id :subcategory_id,
    //       thumbnail :thumbnail
    //     }
    
    //     return this.http.post(this.url, body)
    //   }
    
    //   deleteproductscreen(category_id: number) {
    //     return this.http.delete(this.url + '/' + category_id)
    onAddToCart(product_id:number,product_name:string,product_price:number){
        console.log(product_name,product_price)
    const body={
        product_id:product_id,
        product_name:product_name,
        product_price:product_price

    } 
    return this.http.post(this.url+'/add_to_cart',body)
 }
    getProductDetails(product_id: number) {
        return this.http.get(this.url1+ '/details/' + product_id)
      }  
    

}