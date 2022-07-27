import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LoginService = class LoginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiUrl = "http://localhost:3000";
    }
    pesquisaEmail(params) {
        return this.httpClient.get(`${this.apiUrl}/users/${params}`);
    }
    login(params) {
        return this.httpClient.get(`${this.apiUrl}/users/${params}`);
    }
};
LoginService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map