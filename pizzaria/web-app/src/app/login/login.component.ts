import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password:string="";
  email: any;
  
  usuarioCadastrado:boolean=false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

  }
  login() {
    this.usuarioCadastrado=false;
    const param = `?email=${this.email}`;
    this.loginService.pesquisaEmail(param).subscribe((resp) => {
      console.log(resp)
      if (resp.length) {
        console.log("Usuário possui cadastro");
        this.usuarioCadastrado=true
      } else {
        this.router.navigateByUrl("cadastro");
      }
    })
  }
}
