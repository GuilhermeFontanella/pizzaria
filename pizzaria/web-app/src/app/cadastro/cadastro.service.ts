import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  apiUrl="http://localhost:3000";

  constructor(private httpClient:HttpClient) {

   }
   cadastrarUsuario(usuario:any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/usuarios`, usuario);
   }

   teste(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiUrl}/livros`);
   }
}
