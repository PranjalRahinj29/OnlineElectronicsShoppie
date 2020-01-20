import { Injectable  } from '@angular/core'
import { HttpClient  } from '@angular/common/http';


@Injectable()
export class SubcategoryService{
       
    url='http://localhost:4000/subcategory'



    constructor(private http:HttpClient){
        
    }
    getAllSubcategories()
    
    {
        return this.http.get(this.url)

    }
    addsubcategory(subcategory_id:number,subcategory_name:String,category_id:number,offer_id:number)
      {
    const body = {
           subcategory_id:subcategory_id,
           subcategory_name:subcategory_name,
           category_id:category_id,
           offer_id:offer_id
       }

       return  this.http.post(this.url,body)
        
    }
    deletesubcategory(subcategory_id: number) {
        return this.http.delete(this.url + '/' + subcategory_id)
      }
}