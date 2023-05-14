import { Injectable } from '@angular/core';
import { IUserListResponseData } from '../components/models/user';
import { HttpClient } from '@angular/common/http';
import { IRepositoryListResponseData } from '../components/models/repository';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  searchUsers(query: string, page: number = 1, per_page: number = 20) {
    const url = 'https://api.github.com/search/users';
    const options: {[key: string]: any} = {
      responseType: 'json',
      params: {
        q: query,
        page,
        per_page,
      }
    }

    return this.http.get<IUserListResponseData>(url, options);
  }

  searchReposByUserLogin(user: string, page: number = 1, per_page: number = 20) {
    const url = `https://api.github.com/users/${user}/repos`;
    const options: {[key: string]: any} = {
      responseType: 'json',
      params: {
        page,
        per_page,
      }
    }

    return this.http.get<IRepositoryListResponseData>(url, options);
  }
}
