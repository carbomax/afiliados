import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.-routing.module';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './containers/home/home.component';



@NgModule({
  declarations: [NavbarComponent, PagesComponent, HomeComponent],
  exports: [NavbarComponent, PagesComponent, HomeComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
