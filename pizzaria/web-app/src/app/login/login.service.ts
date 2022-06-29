import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl="http://localhost:3000";
  constructor(private httpClient:HttpClient) { 
  }
  pesquisaEmail(params?:string):Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.apiUrl}/users/${params}`)
  }

  login(params: string):Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}/users/${params}`);
  }
}