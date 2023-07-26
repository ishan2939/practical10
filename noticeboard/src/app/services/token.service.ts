import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  TOKEN_KEY = 'token'
  USER_KEY = 'user'

  constructor() { }

  getUser():any{
    return JSON.parse(localStorage.getItem(this.USER_KEY)!);
  }

  setUser(userData: any):void{
    localStorage.removeItem(this.USER_KEY);

    localStorage.setItem(this.USER_KEY, JSON.stringify(userData));
  }

  getToken():any{
    return JSON.parse(localStorage.getItem(this.TOKEN_KEY)!);
  }

  setToken(token: any):void{
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }
}
