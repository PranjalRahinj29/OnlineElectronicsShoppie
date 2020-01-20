import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { SubcategoryService } from '../subcategory.service';

@Component({
    selector: 'app-subcategory-add',
    templateUrl: './subcategory.add.component.html',
    styleUrls: ['./subcategory.add.component.css']

})

export class SubcategoryAddComponent{
    subcategories:any[]

    subcategory_id:number
    subcategory_name:String
    category_id:number
    offer_id:number
    subcategoryService: SubcategoryService;

constructor(
    private router: Router,
  subcategoryService:SubcategoryService) {

    this.subcategoryService = subcategoryService

    subcategoryService
      .getAllSubcategories()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.subcategories = response['data']

        
          const subcategory = this.subcategoryService[0]
          this.subcategory_id = this.subcategory_id
        }
      })
  }

  ngOnInit() { }

  onAdd() {
    this.subcategoryService
      .addsubcategory(this.subcategory_id, this.subcategory_name,this.category_id,this.offer_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          alert('added subcategory')
          this.router.navigate(['/subcategory-list'])
        } else {
          alert('error while adding product')
          console.log(response['error'])
        }
      })
  }
}