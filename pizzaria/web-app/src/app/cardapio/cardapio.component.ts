import { CardapioService } from './cardapio.service';
import { Component, OnInit  } from '@angular/core';
import { ActionTypes, eventDispatcher, store } from '../diretorio/actions';


@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  pizzas: any[] = [];
  display: boolean = false;
  dadosModal = {
    id: 0,
    nome: '',
    precoP: '',
    precoM: '',
    precoG: ''
  };
  searchInputFromMenu: any;

  constructor(private cardapioService: CardapioService) {
    store.subscribe((state) => {
      this.searchInputFromMenu = state;
      console.log(this.searchInputFromMenu);
      this.getPizzaPeloNome(this.searchInputFromMenu);
    })
  }

  ngOnInit(): void {
    eventDispatcher.next({ type: ActionTypes.BUCAR });
    console.log(this.searchInputFromMenu);
    this.getListasdePizzas();
  }
  
  showDialog(event: {id: number, nome: string, precoP: string, precoM: string, precoG: string}) {
    this.display = true;
    this.dadosModal = event;
    console.log(this.dadosModal)
    
}
  getListasdePizzas() {
    this.cardapioService.getListaPizzas().subscribe((response) => {
      this.pizzas = response
    })
  }

  getPizzaPeloNome(input: string) {
    if (input) {
      this.cardapioService.getListaPizzasByInputText(input).subscribe((response) => {
        this.pizzas = response;
        console.log(response);
        
      })
    }
    if (!input) {
      this.getListasdePizzas();
    }
  }
}
