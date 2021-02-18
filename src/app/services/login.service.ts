import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode, { JwtPayload } from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  SERVER_URL = 'http://localhost:3899';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  public async postLogin(service: any) { 
    console.log(service);
    const result = await this.http.post<any>(this.SERVER_URL+'/usuarios/login',service.value, this.httpOptions).toPromise();

    if(result && result.access_token){
      window.localStorage.setItem('token', result.access_token);
     // localStorage.setItem('currentUser', JSON.stringify(service));
      return true;
    }
    return false;
  }  

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
   const decoded: any = jwt_decode<JwtPayload>(token);
    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }
    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    return !(date.valueOf() > new Date().valueOf());
  } 

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  } 
}
