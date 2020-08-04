import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menuProduct: any = [
    {
      title: 'Productos',
      icon: 'fas fa-cube',
      collapsePage: `${Math.random()}`,
      submenu: [
        { title: 'Afiliados', url: '/dashboard/afiliados' },
        { title: 'Categorias', url: '/dashboard/categories' }
      ]
    }
  ]

  constructor() { }
}
