import { Component } from '@angular/core';

interface INavItem {
  routerLink: string;
  routerLinkActive: string;
  text?: string;
  icon?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navMenu: INavItem[] = [
    {
      routerLink: '/users',
      routerLinkActive: 'active',
      text: 'Users',
      icon: 'users',
    },
    {
      routerLink: '/repositories',
      routerLinkActive: 'active',
      text: 'Repositories',
      icon: 'repositories',
    },
    {
      routerLink: '/favorites',
      routerLinkActive: 'active',
      text: 'Favorites',
      icon: 'favorites',
    },
  ];
}
