import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './containers/home/home.component';
import { DetailProductComponent } from '../common/detail-product/detail-product.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [

      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'detalle-del-producto/:id', component: DetailProductComponent
      },
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
