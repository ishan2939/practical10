import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private token: TokenService, private api: ApiService) {}

  isUserLoggedIn(token: string): Observable<any> {
    return this.api.postRequest('istokenvalid', { token: token }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  login(body: { username: string; password: string }): Observable<any> {
    return this.api.postRequest('login', body).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
