import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebardComponent } from './components/sidebard/sidebard.component';
import { ProductsComponent } from './containers/products/products.component';
import { WelcomeComponent } from './containers/welcome/welcome.component';
import { CategoriesComponent } from './containers/categories/categories.component';
import { AppCommonModule } from '../common/app-common.module';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component'
import { PipesModule } from './pipes/pipes.module';



@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SidebardComponent, ProductsComponent, WelcomeComponent, CategoriesComponent, BreadcrumbsComponent],
  exports: [DashboardComponent,HeaderComponent, SidebardComponent, ProductsComponent, WelcomeComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    FormsModule,
    PipesModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
