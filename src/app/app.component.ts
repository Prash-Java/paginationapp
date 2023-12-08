import { Component, OnInit } from '@angular/core';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { ApiResponse } from './interface/api-response';
import { Page } from './interface/page';
import { HttpErrorResponse } from '@angular/common/http';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Define state here
  usersState$: Observable<{ appState: String, appData?: ApiResponse<Page>, error?: HttpErrorResponse }>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.usersState$ = this.userService.user$().pipe(
      map((response: ApiResponse<Page>) => {
        console.log(response);
        return ({ appState: 'APP_LOADED', appData: response })
      }
      ),
      startWith({ appState: 'APP_LOADING' }),
      catchError((error: HttpErrorResponse) => of({ appState: 'APP_ERROR', error }))
    )
  }
}
