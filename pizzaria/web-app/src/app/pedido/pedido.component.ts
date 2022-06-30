import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from 'src/services/pizza.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  idPizzaSelecionada: number = 0;

  constructor(
    private route: ActivatedRoute,
    private pizzaService: PizzaService
  ) { }

  ngOnInit(): void {
    const idPizza = this.route.snapshot.paramMap.get('pizzaId');
    if (idPizza) {
      this.getDadosPizza(+idPizza);
    }
  }

  getDadosPizza(idPizza: number) {
    this.pizzaService.getPizzaById(idPizza).subscribe((response) => {
      this.idPizzaSelecionada = response;
    })
  }

}
