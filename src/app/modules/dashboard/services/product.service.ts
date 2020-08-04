import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { URL_SERVICE } from '../../../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  totalRegisters : number = 0;
  URI = `${URL_SERVICE}/api/products`;
  products: Product[] = [];


  constructor(public http: HttpClient) {
  }


  getAllProducts(desde) {
    this.http.get(`${this.URI}/?desde=${desde}`).subscribe((resp: any) => {

      this.products = resp.products;
      console.log(this.products)
      this.totalRegisters = resp.total;
    });
  }

  getProductById(id){
    return this.http.get(`${this.URI}/${id}`);
  }

  createProduct(product: Product, file: File) {

    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', product.title);
    formData.append('description', product.description);
    formData.append('price', product.price.toString());
    formData.append('category', product.category._id);

    return this.http.post(`${this.URI}/products`, formData);
  }

  updateProduct(product: Product, file: File){
    let formData = new FormData();
    if(file){
      console.log('el archivo tiene informacion')
      formData.append('image', file);
    }
    formData.append('title', product.title);
    formData.append('description', product.description);
    formData.append('price', product.price.toString());
    formData.append('category', product.category._id);

    return this.http.put(`${this.URI}/products/${product._id}`, formData);

  }
  deleteProduct(product: Product){

    return this.http.delete(`${this.URI}/${product._id}`);
  }
}
