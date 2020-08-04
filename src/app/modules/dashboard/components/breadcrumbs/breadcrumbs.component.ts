import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  data: any;

  constructor( public router: Router ) {

    this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd),
      filter( (activationEnd: ActivationEnd ) => activationEnd.snapshot.firstChild === null),
      map( (activationEnd: ActivationEnd) => activationEnd.snapshot.data )
    )
    .subscribe( data => this.data = data);
   }

  ngOnInit(): void {
  }

}
