import { CadastroService } from './cadastro.service';
import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';

export interface Usuario{
  id?:any;
  nome:string;
  sobre_nome:string;
  data_nascimento:string;
  telefone:string;
  email:string;
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

  ngOnInit(): void {
    this.cadastroService.teste().subscribe({
      next: resp => console.log(resp)
    })
  }

  cadastrar(): void {
    this.novoUsuario= {
      nome:this.nome, 
      sobre_nome:this.sobrenome,
      data_nascimento:this.nascimento,
      telefone:this.celular,
      email:this.email,
      senha:this.senha,
    }
    this.cadastroService.cadastrarUsuario(this.novoUsuario).subscribe((response)=>{
      console.log(response);
    });

  }
}
