import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import baseURL, { urls } from '../config';
import { IUser, IPost } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${baseURL}${urls.users}`);
  }

  getById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${baseURL}${urls.users}/${id}`);
  }
}
