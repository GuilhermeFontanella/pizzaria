import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-dinamico',
  templateUrl: './card-dinamico.component.html',
  styleUrls: ['./card-dinamico.component.css']
})
export class CardDinamicoComponent implements OnInit {
  @Input() pizzas:any;

  constructor() { }
  display = true;

  ngOnInit(): void {
  }
  showDialog() {
    this.display = true;
}
}
