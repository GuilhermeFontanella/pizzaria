import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PizzaService } from 'src/services/pizza.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  idPizzaSelecionada: number = 0;
  items = [{
    label: '',
  }];

  data: any;
  chartOptions: any;
  subscription!: Subscription;
  tamanhoPizza: string = '';
  values: any[] = [];
  showContent = false;
  display: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService
  ) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Tamanho e Sabores'},
      {label: 'Adicionais e Borda'},
      {label: 'Finalizar Pedido'}
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

  getDadosPizza(idPizza: number) {
    let pizzaSelecionada = '';
    this.pizzaService.getPizzaById(idPizza).subscribe((response) => {
      this.idPizzaSelecionada = response.map((e: any) => e.idPizza);
      response.forEach((element: any) => pizzaSelecionada = element.nome);
      this.values.push(pizzaSelecionada);
      this.showContent = true;
    })
    console.log('AQUI');    
    console.log(pizzaSelecionada);
    
  }

  selecionaTamanho(event: any, value: string) {
    this.defineQtSabores(value);
  }

  defineQtSabores(tamanhoPizza: string): void {
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
}
