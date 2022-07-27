import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  apiUrl:string='http://localhost:3000/pizzas';

  constructor(private httpClient:HttpClient) {}

}
