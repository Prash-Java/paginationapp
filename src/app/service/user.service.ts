import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/api-response';
import { Page } from '../interface/page';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly serverUrl: String = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  // Make call to service/api to retrieve users
  users$ = (name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page>> =>
  this.http.get<ApiResponse<Page>>(`${this.serverUrl}/users?name=${name}&page=${page}&size=${size}`)

  // Another way of same logic
  // getUser(name: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page>> {
  //   return this.http.get<ApiResponse<Page>>(`${this.serverUrl}/users?name=${name}&page=${page}&size=${size}`)
  // }
}
