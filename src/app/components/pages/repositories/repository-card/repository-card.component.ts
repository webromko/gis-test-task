import { Component, Input, OnInit } from '@angular/core';
import { IRepository } from 'src/app/components/models/repository';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})
export class RepositoryCardComponent implements OnInit {
  @Input() repo: IRepository | null = null;
  createdAt: Date | null = null;
  updatedAt: Date | null = null;

  constructor() {}

  ngOnInit(): void {
    if (this.repo) {
      this.createdAt = new Date(this.repo.created_at);
      this.updatedAt = new Date(this.repo.created_at);
    }
  }
}


/*


Project Nam

Creation DateTime

Last Update DateTime

Count of stars

*/