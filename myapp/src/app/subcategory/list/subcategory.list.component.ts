import { Component, OnInit } from '@angular/core';
import { SubcategoryService } from '../subcategory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subcategory-list',
  templateUrl: './subcategory.list.component.html',
  styleUrls: ['./subcategory.list.component.css']
})
export class SubCategoryListComponent implements OnInit {

  subcategories: any[] = []

  constructor(
    private router: Router,
    private service: SubcategoryService) {
      this.loadAllSubcategories()
  }

  loadAllSubcategories() {
    this.service
      .getAllSubcategories()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.subcategories = response['data']
        } else {
          alert('error')
        }
      })
  }

  ngOnInit() {
  }

  addsubcategory() {
    this.router.navigate(['/subcategory-add'])
  }

  onDelete(subcategory_id:number)
  {
    this.service
      .deletesubcategory(subcategory_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadAllSubcategories()
        } else {
          console.log(response['error'])
        }
      })
  }

  

}