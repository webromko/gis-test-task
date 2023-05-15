import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRepository, IRepositoryListResponseData } from '../../models/repository';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  userLogin: string = '';
  page: number = 1;
  per_page: number = 24;
  fake_total_count: number = 1000; // Hardcode for avoid absent total_count value in github public REST API for repos.
  list: IRepository[] = [];

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userLogin = this.route.snapshot.params['userLogin'];
    this.searchRepos();
  }

  searchRepos() {
    this.api.searchReposByUserLogin(this.userLogin, this.page, this.fake_total_count).subscribe({
      next: (reposList: IRepositoryListResponseData) => {
        this.list = [...reposList];
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  onPaginationUpdate(page: number):void {
    this.page = page;
  }
}
