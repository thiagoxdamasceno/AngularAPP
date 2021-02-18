import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  SERVER_URL = 'http://localhost:3899';

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  public getPlans(){
    return this.http.get(`${this.SERVER_URL}/planos`);
  }
}
