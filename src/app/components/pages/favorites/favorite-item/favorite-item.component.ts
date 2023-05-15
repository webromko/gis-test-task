import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IUserListItem } from 'src/app/components/models/user';
import { IComment } from 'src/app/components/models/comments';
import * as fromApp from '../../../../store/app.reducer';
import * as fromComments from '../../../common/comments/store/comments.reducer';
import * as fromFavoritesActions from '../../favorites/store/favorites.actions';
import * as fromCommentsActions from '../../../common/comments/store/comments.actions';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss']
})
export class FavoriteItemComponent implements OnInit, OnDestroy {
  @Input() user: IUserListItem | null = null;
  showComments: boolean = false;
  commentsState: Observable<fromComments.State>;
  commentsStateSubscriprion: Subscription | null = null;
  comments: IComment[] = [];

  constructor(private store: Store<fromApp.AppState>) {
    this.commentsState = this.store.pipe(select(fromApp.selectComments));
  }

  ngOnInit(): void {
    this.commentsStateSubscriprion = this.commentsState.subscribe((state: fromComments.State) => {
      if (this.user) {
        this.comments = state[this.user.id] || [];
      }
    });
  }

  ngOnDestroy(): void {
    if (this.commentsStateSubscriprion) this.commentsStateSubscriprion.unsubscribe();
  }

  onCommentsToggle(): void {
    this.showComments = !this.showComments;
  }

  onRemove(): void {
    if (this.user) {
      this.store.dispatch(new fromFavoritesActions.RemoveUser(this.user.id));
    }
  }

  onCreateComment(comment: IComment): void {
    if (this.user) {
      this.store.dispatch(new fromCommentsActions.AddComment({
        userId: this.user.id,
        comment,
      }));
    }
  }
}
