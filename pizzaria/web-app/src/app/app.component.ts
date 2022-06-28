import { Component } from '@angular/core';
import { ActionTypes, eventDispatcher, store } from './diretorio/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzaria';

    ngOnInit() {}
}

