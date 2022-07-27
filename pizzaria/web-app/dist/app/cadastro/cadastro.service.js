import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CadastroService = class CadastroService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = "http://localhost:3000";
    }
    cadastrarUsuario(usuario) {
        return this.httpClient.post(`${this.apiUrl}/users`, usuario);
    }
};
CadastroService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CadastroService);
export { CadastroService };
//# sourceMappingURL=cadastro.service.js.map