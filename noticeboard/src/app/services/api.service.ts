import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getRequest(url: string):Observable<any>{
    return this.http.get(`${this.baseUrl}${url}`).pipe(
      map((res) => {return res})
    );
  }

  postRequest(url: string, body: any):Observable<any>{
    return this.http.post(`${this.baseUrl}${url}`, body).pipe(
      map((res) => {return res})
    );
  }

  putRequest(url: string, body: any):Observable<any>{
    return this.http.put(`${this.baseUrl}`, body).pipe(
      map((res) => {return res})
    );
  }

  delete(url: string):Observable<any>{
    return this.http.delete(`${this.baseUrl}${url}`);
  }
}
