import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {
  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  showDialog() {
    this.display = true;
}
}