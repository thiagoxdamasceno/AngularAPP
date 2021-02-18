import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  SERVER_URL = 'http://localhost:3899';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  /*public postRegister(username: string, email: string, password: string): Observable<any> {
    return this.http.post(this.SERVER_URL + {
      username,
      email,
      password
    }, this.httpOptions);
  } */

  public postRegister(service: any): Observable<any> {
    return this.http.post<any>(this.SERVER_URL+'/usuarios/cadastro',service, this.httpOptions);
  } 
}
