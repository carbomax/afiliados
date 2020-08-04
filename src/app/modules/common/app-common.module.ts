import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalImageComponent } from './modal-image/modal-image.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { PipesModule } from '../dashboard/pipes/pipes.module';



@NgModule({
  declarations: [
    ModalImageComponent,
    DetailProductComponent
  ],
  exports: [
    ModalImageComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class AppCommonModule { }
