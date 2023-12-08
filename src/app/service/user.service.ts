import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/api-response';
import { Page } from '../interface/page';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly serverUrl: String = 'http://locahost:8080'

  constructor(private http: HttpClient) { }

  // Make call to service/api to retrieve users
  user$ = (name: String = '', page: Number = 0, size: Number = 10): Observable<ApiResponse<Page>> =>
  this.http.get<any>(`${this.serverUrl}/users?name=${name}&page=${page}&size=${size}`)

  // Another way of same logic
  getUser(name: String = '', page: Number = 0, size: Number = 10): Observable<any> {
    return this.http.get<any>(`${this.serverUrl}/users?name=${name}&page=${page}&size=${size}`)
  }
}
