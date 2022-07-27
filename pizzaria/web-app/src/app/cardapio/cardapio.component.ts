import { CardapioService } from './cardapio.service';
import { Component, OnInit  } from '@angular/core';
import { ActionTypes, eventDispatcher, store } from '../diretorio/actions';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from 'src/services/pizza.service';


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

  constructor(
    private cardapioService: CardapioService,
    private pizzaService: PizzaService,
    private router: Router,
    private route: ActivatedRoute
    ) {
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
    this.pizzaService.getListaPizzas().subscribe((response) => {
      this.pizzas = response
    })
  }

  getPizzaPeloNome(input: string) {
    if (input) {
      const primeiraLetra = input[0].toUpperCase();
      let palavraCompleta = primeiraLetra + input.slice(1);
      this.pizzaService.getListaPizzasByInputText(palavraCompleta).subscribe((response) => {
        this.pizzas = response;
      })
    }
    if (!input) {
      this.getListasdePizzas();
    }
  }

  iniciarPedido(dadosModal: any, tamanho: string) {
    console.log(dadosModal, tamanho);
    this.router.navigate(['pedido', {pizzaId: dadosModal.id, tamanhoPizza: tamanho}])
  }
}
