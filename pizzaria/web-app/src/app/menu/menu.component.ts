import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ActionTypes, eventDispatcher, store, User } from '../diretorio/actions';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() searchInput = new EventEmitter();
  search: string = '';
  items: MenuItem[]=[]
  
  constructor( ) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio', 
        icon:' pi pi-home',
      },
      {
        label: 'Cardápio',
        icon:'pi pi-book',
        url:'http://localhost:4200/cardapio',
      },
      {
        label: 'Unidades',
        icon:'pi pi-globe',
        url:'http://localhost:4200/unidades',
      },
      {
        label: 'Dúvidas Frequentes',
        icon:'pi pi-question-circle',
      },
      {
        label: 'Entrar/Cadastrar',
        icon:' pi pi-user',
        url:'http://localhost:4200',
      },
      {
        icon:' pi pi-instagram',
      },
    ]
  }

  buscar() {
    this.searchInput.emit(this.search);
    eventDispatcher.next({ type: ActionTypes.BUCAR, payload: this.search });
  }
}
