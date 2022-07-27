import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ActionTypes, eventDispatcher, store } from '../diretorio/actions';
let CardapioComponent = class CardapioComponent {
    constructor(cardapioService, pizzaService, router, route) {
        this.cardapioService = cardapioService;
        this.pizzaService = pizzaService;
        this.router = router;
        this.route = route;
        this.pizzas = [];
        this.display = false;
        this.dadosModal = {
            id: 0,
            nome: '',
            precoP: '',
            precoM: '',
            precoG: ''
        };
        store.subscribe((state) => {
            this.searchInputFromMenu = state;
            this.getPizzaPeloNome(this.searchInputFromMenu);
        });
    }
    ngOnInit() {
        eventDispatcher.next({ type: ActionTypes.BUCAR });
        this.getListasdePizzas();
    }
    showDialog(event) {
        this.display = true;
        this.dadosModal = event;
    }
    getListasdePizzas() {
        this.pizzaService.getListaPizzas().subscribe((response) => {
            this.pizzas = response;
        });
    }
    getPizzaPeloNome(input) {
        if (input) {
            const primeiraLetra = input[0].toUpperCase();
            let palavraCompleta = primeiraLetra + input.slice(1);
            this.pizzaService.getListaPizzasByInputText(palavraCompleta).subscribe((response) => {
                this.pizzas = response;
            });
        }
        if (!input) {
            this.getListasdePizzas();
        }
    }
    iniciarPedido(dadosModal, tamanho) {
        console.log(dadosModal, tamanho);
        this.router.navigate(['pedido', { pizzaId: dadosModal.id, tamanhoPizza: tamanho }]);
    }
};
CardapioComponent = __decorate([
    Component({
        selector: 'app-cardapio',
        templateUrl: './cardapio.component.html',
        styleUrls: ['./cardapio.component.css']
    })
], CardapioComponent);
export { CardapioComponent };
//# sourceMappingURL=cardapio.component.js.map