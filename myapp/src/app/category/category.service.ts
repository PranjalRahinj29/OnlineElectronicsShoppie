import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  url = 'http://localhost:4000/category'

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(this.url)
  }

  addCategory(category_name: string) {
    const body = {
      category_name: category_name
    }

    return this.http.post(this.url, body)
  }

  deleteCategory(category_id: number) {
    return this.http.delete(this.url + '/' + category_id)
  }
}