import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IPost} from '../interfaces';
import {urls} from '../../../config';
import {IUser} from "../../user/interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.http.get<IPost[]>(urls.posts);
  }
  getById(id: string): Observable<IPost> {
    return this.http.get<IPost>(urls.posts + '/' + id);
  }
}
