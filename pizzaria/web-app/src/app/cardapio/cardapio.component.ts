import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {
  
  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  showDialog() {
    this.display = true;
}
}
