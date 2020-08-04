import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './containers/products/products.component';
import { WelcomeComponent } from './containers/welcome/welcome.component';
import { CategoriesComponent } from './containers/categories/categories.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {path: 'welcome',  component: WelcomeComponent, data: { title: 'Bienvenido', report: false} },
      { path: 'afiliados', component: ProductsComponent, data: { title: 'Afiliados', report: true} },
      { path: 'categories', component: CategoriesComponent, data: { title: 'Categorias' , report: true} },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
