import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER_URL = 'http://localhost:3899';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<any> {
    return this.http.post(SERVER_URL + '/usuarios/login', {
      email,
      senha
    }, httpOptions);
  }

  register(nome: string, email: string, senha: string): Observable<any> {
    return this.http.post(SERVER_URL + '/usuarios/cadastro', {
      nome,
      email,
      senha
    }, httpOptions);
  }

  updateUserPlan(id_plano: number, id_usuario: number): Observable<any> {
    return this.http.patch(SERVER_URL + '/usuarios', {
      id_plano,
      id_usuario
    }, httpOptions);
  }
}
