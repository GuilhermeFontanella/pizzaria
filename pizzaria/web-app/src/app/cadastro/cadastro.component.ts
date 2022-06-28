import { CadastroService } from './cadastro.service';
import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';

export interface Usuario{
  id?:number;
  nome:string;
  sobrenome:string;
  nascimento:string;
  celular:string;
  email:string;
  usuario:string;
  senha:string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  novoUsuario!:Usuario;
  nome:string="";
  sobrenome:string="";
  nascimento:string="";
  celular:string="";
  email:string="";
  usuario:string="";
  senha:string="";
  
  constructor(
    private cadastroService: CadastroService
    ) { }

  ngOnInit(): void {}

  cadastrar(): void {
    this.novoUsuario= {
      nome:this.nome, 
      sobrenome:this.sobrenome,
      nascimento:this.nascimento,
      celular:this.celular,
      email:this.email,
      usuario:this.usuario,
      senha:this.senha,
    }
    this.cadastroService.cadastrarUsuario(this.novoUsuario).subscribe(()=>{console.log(this.novoUsuario)});

  }
}
