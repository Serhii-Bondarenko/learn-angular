import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import baseURL, { urls } from '../config';
import {IPost} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${baseURL}${urls.posts}`);
  }
  getById(id: string): Observable<IPost> {
    return this.http.get<IPost>(`${baseURL}${urls.posts}/${id}`);
  }
}
