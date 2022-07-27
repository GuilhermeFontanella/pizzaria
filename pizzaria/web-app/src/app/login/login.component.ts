import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionTypes, eventDispatcher } from '../diretorio/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string = "";
  email: any;
  userLoggedIn: any;
  
  usuarioCadastrado:boolean=false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {}

  login() {
    this.usuarioCadastrado = false;
    let param = `?email=${this.email}`;
    this.loginService.pesquisaEmail(param).subscribe((resp) => {
      if (resp.length) {
        this.usuarioCadastrado=true
        if (this.password) {
          param += `&password=${this.password}`;
          this.loginService.login(param).subscribe((response) => {
            this.userLoggedIn = response[0];
            eventDispatcher.next({ type: ActionTypes.LOGGED_IN_USER, payload: this.userLoggedIn });
            this.router.navigateByUrl('cardapio');
          })
        }
      } else {
        this.router.navigateByUrl("cadastro");
      }
    })
  }
}
