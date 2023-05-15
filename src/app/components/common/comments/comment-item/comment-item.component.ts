import { Component, Input, OnInit } from '@angular/core';
import { IComment } from 'src/app/components/models/comments';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/app.reducer';
import * as CommentsActions from '../../../common/comments/store/comments.actions';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: IComment | null = null;
  @Input() index: number | undefined = undefined;
  @Input() userId: number | undefined = undefined;
  editMode: boolean = false;
  createdAt: Date | null = null;
  updatedAt: Date | null = null;
  
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    if (this.comment) {
      this.createdAt = new Date(this.comment.createdAt);
      this.updatedAt = new Date(this.comment.updatedAt);
    }
  }

  onConfirmEditComment(comment: IComment): void {
    this.editMode = false;

    if (this.userId !== undefined && this.index !== undefined) {
      this.store.dispatch(new CommentsActions.EditCommentByIndex({
        index: this.index,
        userId: this.userId,
        comment,
      }));
    }
  }

  onRemoveComment(): void {
    this.editMode = false;

    if (this.userId !== undefined && this.index !== undefined) {
      this.store.dispatch(new CommentsActions.RemoveCommentByIndex({
        index: this.index,
        userId: this.userId,
      }));
    }
  }

  onCancelEdit(): void {
    this.editMode = false;
  }

  onEnableEdit(): void {
    this.editMode = true;
  }
}
