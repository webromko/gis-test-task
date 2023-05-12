import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/services/api.service';
import { IUserListItem, IUserListResponseData } from '../../models/user';
import * as fromApp from '../../../store/app.reducer';
import * as FavoritesActions from '../favorites/store/favorites.actions';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  page = 1;
  per_page = 20;
  searchString: string = 'web';

  list: IUserListItem[] = [];

  constructor(private api: ApiService, private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.api.searchUsers(this.searchString, this.page, this.per_page).subscribe((data: IUserListResponseData) => {
      this.updateList(data.items);

      console.log('list =', this.list);
    });
  }

  updateList (arrayPart: IUserListItem[]): void {
    this.list = [...this.list, ...arrayPart];
  }

  clearList(): void {
    this.list = [];
  }

  addToFav(user: IUserListItem): void {
    this.store.dispatch(new FavoritesActions.AddUser(user));
  }

  removeFromFav(userId: number): void {
    this.store.dispatch(new FavoritesActions.RemoveUser(userId));
  }
}
