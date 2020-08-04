import { URL_SERVICE } from 'src/app/config/config';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';
import { Product } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';
import { NgForm } from '@angular/forms';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  imageError = 'El archivo no es una imagen!!!';
  register = true;
  product: Product = {
    _id: '',
    title: '',
    description: '',
    price: 0,
    photo: '',
    category: new Category('')
  };

  hiddenModal = 'hideModal';

  fileTemp: string;
  file: File;
  fileName = 'Elija una imagen';
  isNotImage = false;
  error = false;

  desde: number = 0;


  constructor(public productService: ProductService,
    public categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts(this.desde);
  }



  saveProduct(f: NgForm) {

    if (f.valid) {
      if (this.register) {

        if (!this.fileTemp) {
          this.imageError = 'Debe seleccionar una imagen';
          this.isNotImage = true;
          return;
        }
        this.productService.createProduct(this.product, this.file).subscribe(prod => {

          this.error = false;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${this.product.title}`,
            text: 'Producto creado!!',
            showConfirmButton: false,
            timer: 2000
          });

          this.productService.getAllProducts(this.desde);
          this.closeDialog();


        }, (error: any) => {


          if (error.error.errors.error.code === 11000) {

            this.error = true;

          } else {
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Producto no actualizado!!',
              showConfirmButton: false,
              timer: 1500
            });

            this.closeDialog();
          }

        });

      } else {
        //actualizar producto
        console.log('Actualizanod')

        this.productService.updateProduct(this.product, this.file).subscribe(resp => {

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${this.product.title}`,
            text: 'Categoría  actualizada!!',
            showConfirmButton: false,
            timer: 1500
          });
          this.closeDialog();
          this.productService.getAllProducts(this.desde);

        }, error => {
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Producto no actualizado!!',
            showConfirmButton: false,
            timer: 1500
          })
          this.closeDialog();
        });


      }
    } else {
      return;
    }


  }

  openModalUpdate(product: Product) {

    // const url = `${URL_SERVICE}/api/file/products/${product.photo}`;
    //console.log(url)
    this.product = product;
    this.hiddenModal = '';
    this.register = false;
  }

  deleteProduct(product: Product) {

    Swal.fire({
      position: 'top-end',
      title: 'Estás seguro?',
      text: `Estás seguro de eliminar: ${product.title}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Si!'
    }).then((result) => {

      if (result.value) {

        this.productService.deleteProduct(product).subscribe((resp: any) => {
          this.productService.getAllProducts(this.desde);
          this.closeDialog();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${resp.product.title}`,
            text: 'Producto eliminado!!',
            showConfirmButton: false,
            timer: 1500
          });
        });

      }

    })

  }

  onFileChange(event) {

    if (event.target.files.length >= 0) {

      this.file = event.target.files[0];
      if (!this.file) {
        return;
      }

      if (this.file.type.indexOf('image') < 0) {
        this.isNotImage = true;
        this.imageError = 'El archivo no es una imagen!!!';
        this.fileName = 'Elija una imagen';
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onloadend = () => this.fileTemp = reader.result as string;
      this.fileName = this.file.name;
      this.isNotImage = false;

    } else {
      this.file = null;
      this.fileTemp = '';

    }
  }

  openModalCreate() {
    this.hiddenModal = '';
    this.register = true;
  }


  closeDialog() {
    this.hiddenModal = `hideModal`;
    this.fileTemp = null;
    this.error = false;
    this.fileName = 'Elija una imagen';
    this.product = { _id: '', title: '', description: '', category: new Category(''), price: 0, photo: '' };
  }


  changePagination(value: number) {

    const pos = this.desde + value;
    if (pos >= this.productService.totalRegisters) {
      return;
    }
    if (pos < 0) {
      return;
    }
    this.desde += value;
    console.log(this.desde)
    this.productService.getAllProducts(this.desde);
  }

}
