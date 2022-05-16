import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import baseURL, { urls } from '../config';
import { IComment, IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<IComment[]> {
    return this.http.get<IComment[]>(`${baseURL}${urls.comments}`);
  }
  getById(id: string): Observable<IComment> {
    return this.http.get<IComment>(`${baseURL}${urls.comments}/${id}`);
  }
}
