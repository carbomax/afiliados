import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

//sweetalert
import Swal from 'sweetalert2';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  category: Category = new Category('');
  hiddenModal = 'hideModal';
  name = '';
  regiter = true;

  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {

  }


  openModalUpdate(category: Category) {
    this.category = category;
    this.hiddenModal = '';
    this.regiter = false;
  }


  deleteCategory(category: Category) {
    Swal.fire({
      position: 'top-end',
      title: 'Estás seguro?',
      text: `Estás seguro de eliminar: ${category.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Si!'
    }).then((result) => {

      if (result.value) {
        this.categoryService.deleteCategory(category._id).subscribe( (resp: any) => {
          this.categoryService.getAllcategories();
          this.closeDialog();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${resp.category.name}`,
            text: 'Categoría eliminada!!',
            showConfirmButton: false,
            timer: 1500
          })
        });

      }

    })


  }

  saveCategory() {

    if(this.category.name){

      if(this.regiter){
        this.categoryService.saveCategory(this.category).subscribe(resp => {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${this.category.name}`,
            text: 'Categoría  creada!!',
            showConfirmButton: false,
            timer: 1500
          });

          this.closeDialog();
        }, error => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Categoría creada!!',
            showConfirmButton: false,
            timer: 1500
          });
        });

      } else{
        console.log(this.category)
        this.categoryService.updateCategory(this.category).subscribe( resp => {
          this.hiddenModal = 'hideModal';
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${this.category.name}`,
            text: 'Categoría  actualizada!!',
            showConfirmButton: false,
            timer: 1500
          });
        }, error => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Categoría no actualizada!!',
            showConfirmButton: false,
            timer: 1500
          })
          this.closeDialog();
        });
      }

    }

  }

  openModalCreate(){
    this.hiddenModal = '';
    this.regiter = true;
  }

  closeDialog(){
   this.hiddenModal =  `hideModal`;
   this.category.name = '';
   this.categoryService.getAllcategories();
  }




}
