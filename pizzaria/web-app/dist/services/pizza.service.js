import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PizzaService = class PizzaService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = 'http://localhost:3000/pizzas';
    }
    getListaPizzas() {
        return this.httpClient.get(`${this.apiUrl}`);
    }
    getListaPizzasByInputText(input) {
        return this.httpClient.get(`${this.apiUrl}?q=${input}`);
    }
    getPizzaById(id) {
        return this.httpClient.get(`${this.apiUrl}?id=${id}`);
    }
};
PizzaService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PizzaService);
export { PizzaService };
//# sourceMappingURL=pizza.service.js.map