import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PedidoComponent = class PedidoComponent {
    constructor(route, pizzaService) {
        this.route = route;
        this.pizzaService = pizzaService;
        this.idPizzaSelecionada = 0;
        this.items = [{
                label: '',
            }];
        this.tamanhoPizza = '';
        this.values = [];
        this.showContent = false;
        this.display = false;
    }
    ngOnInit() {
        this.items = [
            { label: 'Tamanho e Sabores' },
            { label: 'Adicionais e Borda' },
            { label: 'Finalizar Pedido' }
        ];
        this.data = {
            //labels: ['A','B'],
            datasets: [
                {
                    data: [50, 50],
                    backgroundColor: [
                        "#adadad",
                        "#adadad",
                    ],
                    hoverBackgroundColor: [
                        "#dddddd",
                        "#dddddd",
                    ]
                }
            ]
        };
        const idPizza = this.route.snapshot.paramMap.get('pizzaId');
        const tamanhoPizza = this.route.snapshot.paramMap.get('tamanhoPizza');
        if (idPizza) {
            this.getDadosPizza(+idPizza);
        }
        if (tamanhoPizza) {
            this.tamanhoPizza = tamanhoPizza;
            this.defineQtSabores(tamanhoPizza);
        }
    }
    getDadosPizza(idPizza) {
        let pizzaSelecionada = '';
        this.pizzaService.getPizzaById(idPizza).subscribe((response) => {
            this.idPizzaSelecionada = response.map((e) => e.idPizza);
            response.forEach((element) => pizzaSelecionada = element.nome);
            this.values.push(pizzaSelecionada);
            this.showContent = true;
        });
        console.log('AQUI');
        console.log(pizzaSelecionada);
    }
    selecionaTamanho(event, value) {
        this.defineQtSabores(value);
    }
    defineQtSabores(tamanhoPizza) {
        let tamanho = this.data.datasets[0].data;
        if (tamanhoPizza === 'p') {
            console.log('entrou aqui');
            tamanho = [100];
        }
        if (tamanhoPizza === 'm' || tamanhoPizza === 'g') {
            console.log('m ou g');
            tamanho = [50, 50];
        }
        if (tamanhoPizza === 'gg') {
            console.log('gg');
            tamanho = [25, 25, 25, 25];
        }
        this.data = {
            //labels: ['A','B'],
            datasets: [
                {
                    data: tamanho,
                    backgroundColor: [
                        "#adadad",
                        "#adadad",
                    ],
                    hoverBackgroundColor: [
                        "#dddddd",
                        "#dddddd",
                    ]
                }
            ]
        };
    }
    showDialog() {
        this.display = true;
    }
    teste() {
        this.showDialog();
    }
};
PedidoComponent = __decorate([
    Component({
        selector: 'app-pedido',
        templateUrl: './pedido.component.html',
        styleUrls: ['./pedido.component.css']
    })
], PedidoComponent);
export { PedidoComponent };
//# sourceMappingURL=pedido.component.js.map