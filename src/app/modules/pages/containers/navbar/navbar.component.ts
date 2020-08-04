import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../dashboard/services/category.service';
import { Category } from '../../../dashboard/models/category.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public categoryService: CategoryService) {

  }

  ngOnInit(): void {
  }

}
