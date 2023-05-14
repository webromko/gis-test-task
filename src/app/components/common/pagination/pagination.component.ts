import { Component, EventEmitter, Input, Output } from '@angular/core';

const FILTER_PAG_REGEX = /[^0-9]/g;

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Input() pageSize: number = 20;
  @Input() collectionSize: number = 0;
  @Output() paginationUpdate: EventEmitter<number> = new EventEmitter();

  constructor() {}

  selectPage(page: string): void {
    const pageNumber = Math.max(Math.min(parseInt(page, 10) || 1, Math.ceil(this.collectionSize/this.pageSize)), 1);

    if (pageNumber !== this.page) {
      this.paginationUpdate.emit(pageNumber);
    }

    this.page = pageNumber;
  }

  onPageChange(pageNumber: number) {
    this.paginationUpdate.emit(pageNumber);
  }

  formatInput(input: HTMLInputElement): void {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
}
