import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CadastroComponent = class CadastroComponent {
    constructor(cadastroService) {
        this.cadastroService = cadastroService;
        this.nome = "";
        this.sobrenome = "";
        this.nascimento = "";
        this.celular = "";
        this.email = "";
        this.usuario = "";
        this.senha = "";
    }
    ngOnInit() { }
    cadastrar() {
        this.novoUsuario = {
            nome: this.nome,
            sobrenome: this.sobrenome,
            nascimento: this.nascimento,
            celular: this.celular,
            email: this.email,
            usuario: this.usuario,
            senha: this.senha,
        };
        this.cadastroService.cadastrarUsuario(this.novoUsuario).subscribe(() => { console.log(this.novoUsuario); });
    }
};
CadastroComponent = __decorate([
    Component({
        selector: 'app-cadastro',
        templateUrl: './cadastro.component.html',
        styleUrls: ['./cadastro.component.css']
    })
], CadastroComponent);
export { CadastroComponent };
//# sourceMappingURL=cadastro.component.js.map