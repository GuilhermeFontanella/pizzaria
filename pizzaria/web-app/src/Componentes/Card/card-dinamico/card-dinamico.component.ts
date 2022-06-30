import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-dinamico',
  templateUrl: './card-dinamico.component.html',
  styleUrls: ['./card-dinamico.component.css']
})
export class CardDinamicoComponent implements OnInit, OnChanges {
  @Input() pizzas:any;
  @Input() loading: boolean = true;
  display = true;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loading = true;
    if(changes) {
      setTimeout(() => {
        this.loading = false;
      }, 700)
    }
  }

  showDialog() {
    this.display = true;
  }
}
