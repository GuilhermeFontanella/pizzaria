import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  apiUrl:string='http://localhost:3000/pizzas';

  constructor(private httpClient:HttpClient) {}

  getListaPizzas(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}`);
  }

  getListaPizzasByInputText(input: string): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}?q=${input}`);
  }

  getPizzaById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}?id=${id}`)
  }
}
