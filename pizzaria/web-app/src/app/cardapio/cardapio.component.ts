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
  dadosModal = {
    id: 0,
    nome: '',
    preco: ''
  };

  constructor(private cardapioService:CardapioService) { }

  ngOnInit(): void {
    this.getListasdePizzas();
  }
  
  showDialog(event: {id: number, nome: string, preco: string}) {
    this.display = true;
    this.dadosModal = event;
    console.log(this.dadosModal)
    
}
  getListasdePizzas(){
    this.cardapioService.getListaPizzas().subscribe((Response)=>{
      this.pizzas=Response
    })
  }
}
