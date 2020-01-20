import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category.list.component.html',
  styleUrls: ['./category.list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: any[] = []

  constructor(
    private router: Router,
    private categoryService: CategoryService) 
    {
      this.loadCategories()
    }

  loadCategories() {
    this.categoryService
      .get()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.categories = response['data']
        }
      })
  }

  onAddCategory() {
    this.router.navigate(['/category-add'])
  }

  ngOnInit() {
  }

  onDelete(category_id: number) {
    this.categoryService
      .deleteCategory(category_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadCategories()
        } else {
          console.log(response['error'])
        }
      })
  }

  onUpdate() {

  }

}