import { AppCommonModule } from './../common/app-common.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages.-routing.module';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './containers/home/home.component';
import { PipesModule } from '../dashboard/pipes/pipes.module';



@NgModule({
  declarations: [NavbarComponent, PagesComponent, HomeComponent],
  exports: [NavbarComponent, PagesComponent, HomeComponent],
  imports: [
    CommonModule,
    PipesModule,
    AppCommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
