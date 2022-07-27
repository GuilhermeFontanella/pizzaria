import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CardapioService = class CardapioService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'http://localhost:3000/pizzas';
    }
};
CardapioService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CardapioService);
export { CardapioService };
//# sourceMappingURL=cardapio.service.js.map