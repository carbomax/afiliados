import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  URI = 'http://localhost:5000/api/categories';

  category: Category;
  categories: Category[] = [];


  constructor(public http: HttpClient) {
    this.getAllcategories();
   }

   getAllcategories(){

    return this.http.get(this.URI).subscribe( (resp: any) => {
      this.categories = resp.categories;
    });
   }

   saveCategory(category: Category){
    return this.http.post( this.URI, category);
   }

   updateCategory(category: Category){
    return this.http.put(`${this.URI}/${category._id}`, category);
   }


   deleteCategory(id: string){
     return this.http.delete(`${this.URI}/${id}`);
   }
}
