import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../dashboard/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public afiliados: ProductService, public router: Router) { }

  ngOnInit(): void {
    this.afiliados.getAllProducts(0);
  }

  detailProduct(product){

    this.router.navigate(['detalle-del-producto', product._id]);


  }

}
