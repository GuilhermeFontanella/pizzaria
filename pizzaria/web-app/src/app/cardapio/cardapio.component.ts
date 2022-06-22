import { CardapioService } from './cardapio.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  pizzas:any[]=[];
  display: boolean = false;

  constructor(private cardapioService:CardapioService) { }

  ngOnInit(): void {
    this.getListasdePizzas();
  }
  
  showDialog() {
    this.display = true;
}
  getListasdePizzas(){
    this.cardapioService.getListaPizzas().subscribe((Response)=>{
      this.pizzas=Response
    })
  }
}
