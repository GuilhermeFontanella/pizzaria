import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  apiUrl="http://localhost:3000";

  constructor(private httpClient:HttpClient) {

   }
   cadastrarUsuario(usuario:any):Observable<any>{
    return this.httpClient.post<any>(`${this.apiUrl}/users`,usuario);
   }
}
