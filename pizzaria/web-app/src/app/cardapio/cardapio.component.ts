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
      this.getPizzaPeloNome(this.searchInputFromMenu);
    })
  }

  ngOnInit(): void {
    eventDispatcher.next({ type: ActionTypes.BUCAR });
    this.getListasdePizzas();
  }
  
  showDialog(event: {id: number, nome: string, precoP: string, precoM: string, precoG: string}) {
    this.display = true;
    this.dadosModal = event;    
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
      })
    }
    if (!input) {
      this.getListasdePizzas();
    }
  }
}
