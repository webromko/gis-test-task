import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ApiService } from 'src/app/services/api.service';
import { IUserListItem, IUserListResponseData } from '../../models/user';
import * as fromApp from '../../../store/app.reducer';
import * as FavoritesActions from '../favorites/store/favorites.actions';
import { Subscription, debounceTime } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserModalComponent } from './user-modal/user-modal.component';

interface extendedTarget extends EventTarget {
  closest: any;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  page: number = 1;
  per_page: number = 20;
  total_count: number = 0
  searchString: string = '';
  list: IUserListItem[] = [];
  favoriteUsersList: IUserListItem[] = [];
  searchControl: FormControl;
  searchForm: FormGroup;
  debounceTimeValue: number = 500;
  favoriteUsersSubscription: Subscription | null = null;
  searchControlSubscription: Subscription | null = null;

  constructor(
    private api: ApiService,
    private store: Store<fromApp.AppState>,
    private modalService: NgbModal,
  ) {
    this.searchForm = new FormGroup({
      searchControl: new FormControl(this.searchString),
    });

    this.searchControl = this.searchForm.get('searchControl') as FormControl;
  }

  ngOnInit(): void {
    this.searchUsers();

    this.favoriteUsersSubscription = this.store.pipe(select(fromApp.favoriteUsers))
      .subscribe((favoriteUsers: IUserListItem[]) => {
        this.favoriteUsersList = [...favoriteUsers];
      });

    this.searchControlSubscription = this.searchControl.valueChanges
      .pipe(debounceTime(this.debounceTimeValue))
      .subscribe((value: string | null) => {
        this.page = 1;
        this.searchString = value === null ? '' : value;
        this.searchUsers(true); // enable rewriting of existing list
      });
  }

  ngOnDestroy(): void {
    if (this.favoriteUsersSubscription) this.favoriteUsersSubscription.unsubscribe();
    if (this.searchControlSubscription) this.searchControlSubscription.unsubscribe();
  }

  isAddedToFav (id: number): boolean {
    return this.favoriteUsersList.some((user: IUserListItem) => user.id === id);
  }

  searchUsers(clear: boolean = false): void {
    if (!this.searchString) {
      this.clearList();
    } else {
      this.api.searchUsers(this.searchString, this.page, this.per_page).subscribe(
        (data: IUserListResponseData) => {
          if (clear) this.clearList();

          this.updateList(data.items, data.total_count);
        },
        (err) => {
          console.error(err);
          this.clearList();
        },
      );
    }
  }

  updateList (arrayPart: IUserListItem[], total_count: number): void {
    this.total_count = total_count;
    this.list = [...this.list, ...arrayPart];
  }

  clearList(): void {
    this.list = [];
    this.total_count = 0;
  }

  addToFav(user: IUserListItem): void {
    this.store.dispatch(new FavoritesActions.AddUser(user));
  }

  removeFromFav(userId: number): void {
    this.store.dispatch(new FavoritesActions.RemoveUser(userId));
  }

  openUserModal(user: IUserListItem): void {
    const modalRef = this.modalService.open(UserModalComponent);

    modalRef.componentInstance.user = user;
  }

  onToggleFav(user: IUserListItem): void {
    if (this.isAddedToFav(user.id)) {
      this.removeFromFav(user.id);
    } else {
      this.addToFav(user);
    }
  }

  onRowClick(event: MouseEvent, user: IUserListItem): void {
    if ((event.target as extendedTarget).closest('a, button') === null) {
      this.openUserModal(user);
    }
  }

  onPaginationUpdate(page: number): void {
    this.page = page;
    this.searchUsers(true);
  }
}
