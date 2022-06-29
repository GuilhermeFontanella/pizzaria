import { AfterContentChecked, AfterViewChecked, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionTypes, eventDispatcher, store, User } from './diretorio/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzaria';
  userLoggedIn: any;
  loggedUser: any;

    constructor(
      private route: ActivatedRoute,
      private router: Router) {
        store.subscribe((state) => {
          if (!state) {
            return;
          } else {            
            this.userLoggedIn = state;
            this.loggedUser = sessionStorage.setItem('loggedUser', this.userLoggedIn);
          }
          
        })
      }

    ngOnInit() {
      eventDispatcher.next({ type: ActionTypes.LOGGED_IN_USER });  
    }

    
}

