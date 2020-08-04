import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../dashboard/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {


  product: any = {}

  constructor(public activatedRouter: ActivatedRoute, public productService: ProductService) {

   const id = this.activatedRouter.snapshot.paramMap.get('id');
   if(id){
     this.getDetailProduct(id);
   }

   }

  ngOnInit(): void {
  }


  getDetailProduct( id: string){

    this.productService.getProductById(id).subscribe( (resp: any) => {
      this.product = resp.product;
    });
  }

}
