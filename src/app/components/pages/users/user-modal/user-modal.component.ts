import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IUserListItem } from 'src/app/components/models/user';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent {
  user: IUserListItem | null = null;

  constructor(private activeModal: NgbActiveModal) {}

  closeModal(from?: string) {
    this.activeModal.dismiss(from ? from : undefined);
  }
}
