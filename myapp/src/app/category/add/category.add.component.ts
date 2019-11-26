import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-category-add',
  templateUrl: './category.add.component.html',
  styleUrls: ['./category.add.component.css']
})
export class CategoryAddComponent implements OnInit {

  category_name: string
  

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAdd() {
    // if (this.category_name.length == 0) 
    // {
    //   alert('enter valid category name')
    // } 
    //  else {
      this.categoryService
        .addCategory(this.category_name)
        .subscribe(response => {
          if (response['status'] == 'success') 
          {
            alert('added succesfully')


           // this.router.navigate(['/category-list'])
          }
          else{
              alert('error')
              console.log(response['error'])
          }
        })
    }
  

  onCancel() {
   // this.router.navigate(['/category-list'])
  }

}
