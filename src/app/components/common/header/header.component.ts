import { Component } from '@angular/core';
import { INavItem } from '../../models/navigation';
import { Store, select } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
import { Observable } from 'rxjs';
import { IUserListItem } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  favoritesState: Observable<IUserListItem[]>;
  navMenu: INavItem[] = [
    {
      routerLink: '/users',
      routerLinkActive: 'active',
      type: 'users',
      text: 'Users',
      icon: 'users',
    },
    {
      routerLink: '/favorites',
      routerLinkActive: 'active',
      type: 'favorites',
      text: 'Favorites',
      icon: 'favorites',
    },
  ];

  constructor(private store: Store<fromApp.AppState>) {
    this.favoritesState = this.store.pipe(select(fromApp.favoriteUsers))
  }
}
