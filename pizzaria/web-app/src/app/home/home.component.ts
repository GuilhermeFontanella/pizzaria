import { TipoCard } from './combocard.module';
import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/services/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean = false;
  tipoCard=TipoCard.COMBO;
  tipoCardapio= TipoCard.CARDAPIO;
  tipoUnidades= TipoCard.UNIDADES;
  

  constructor() { }

  ngOnInit(): void {
    
  }


}
