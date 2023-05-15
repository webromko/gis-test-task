import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IComment } from 'src/app/components/models/comments';

export interface IErrorSet {
  [key: string]: (error: any) => string;
}

@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.scss'],
})
export class CommentsFormComponent implements OnInit {
  @Input() comment: IComment | undefined;
  @Output() submitForm: EventEmitter<IComment> = new EventEmitter();
  @Output() cancelEdit: EventEmitter<void> = new EventEmitter();
  form: FormGroup | null = null;
  errorSet: IErrorSet = {
    minlength: (e: any) => `Minimum character size ${e.requiredLength}. Actual size is ${e.actualLength}`,
    maxlength: (e: any) => `Max character size ${e.requiredLength}. Actual size is ${e.actualLength}`,
    required: (e: any) => `This field is required`,
  };

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      'message': new FormControl(
        this.comment ? this.comment.message : '',
        [Validators.required, Validators.minLength(10), Validators.maxLength(100)],
      ),
    });
  }

  onSubmit(): void {
    const value = this.form?.get('message')?.value || '';
    const updatedAt = (new Date()).getTime();
    const createdAt = this.comment ? this.comment.createdAt : updatedAt;

    this.submitForm.emit({
      message: value,
      createdAt,
      updatedAt,
    });

    this.form?.reset();
  }

  onCancelEdit(): void {
    this.cancelEdit.emit();
  }

  processErrors(errors: any): string[] {
    return Object.keys(errors).map((errorKey: string) => this.errorSet[errorKey as keyof IErrorSet](errors[errorKey]));
  }
}
