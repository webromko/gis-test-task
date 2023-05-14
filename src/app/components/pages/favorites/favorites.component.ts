import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUserListItem } from '../../models/user';
import * as fromApp from '../../../store/app.reducer';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  list: Observable<IUserListItem[]>;

  constructor(private store: Store<fromApp.AppState>) {
    this.list = this.store.pipe(select(fromApp.favoriteUsers));
  }
}
