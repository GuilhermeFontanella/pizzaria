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
  pizzasSelecionadas: any[] = [];
  checked: boolean = false;
  cardapio: any[] = [];
  qtSaboresRestantesPSelecao: number = 0;
  opcoesDesabilitadas: boolean = false;
  activeIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService,
    private router: Router
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
  }

  selecionaTamanho(event: any, value: string) {
    this.defineQtSabores(value);
  }

  getCardapioPizzas() {
    this.pizzaService.getListaPizzas().subscribe((response) => {
      this.cardapio = response;
      console.log(this.cardapio);
    })
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
        { data: tamanho, backgroundColor: [ "#adadad", "#adadad" ], hoverBackgroundColor: [ "#dddddd", "#dddddd" ] }
      ]
    };
  }

  showDialog() {
    this.display = true;
  }

  closeModal() {
    this.display = false;
  }

  selecionarMaisSabores() {
    this.getCardapioPizzas();
    this.showDialog();
    this.verificaQtSaboresDisponieisPSelecao();
    this.pizzasSelecionadas.push(...this.values);
    let index = this.pizzasSelecionadas.findIndex((e) => e === e);
    this.pizzasSelecionadas = this.pizzasSelecionadas.slice(index, index+1);
  }

  verificaQtSaboresDisponieisPSelecao(pizzasSelecionadas?: any[]) {
    let number: number = pizzasSelecionadas?.length ? pizzasSelecionadas?.length : this.values.length;
    if (this.tamanhoPizza === 'p') {
      this.qtSaboresRestantesPSelecao = 1 - number;
    }
    if (this.tamanhoPizza === 'm' || this.tamanhoPizza === 'g') {
      this.qtSaboresRestantesPSelecao = 2 - number;
    }
    if (this.tamanhoPizza === 'gg') {
      this.qtSaboresRestantesPSelecao = 4 - number;
    }
  }

  selecionaSabor(event: any) {
    this.pizzasSelecionadas = event.checked
    this.values = event.checked;
    this.verificaQtSaboresDisponieisPSelecao(this.pizzasSelecionadas);
  }

  proximoPasso() {
    this.activeIndex = 1
  }

  mudaPasso(event: any) {
    this.activeIndex = event;
  }
}
