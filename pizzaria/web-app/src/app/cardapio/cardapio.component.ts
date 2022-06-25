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
    precoP: '',
    precoM: '',
    precoG: ''
  };

  constructor(private cardapioService:CardapioService) { }

  ngOnInit(): void {
    this.getListasdePizzas();
  }
  
  showDialog(event: {id: number, nome: string, precoP: string, precoM: string, precoG: string}) {
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
