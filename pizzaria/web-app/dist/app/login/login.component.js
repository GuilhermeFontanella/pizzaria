import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ActionTypes, eventDispatcher } from '../diretorio/actions';
let LoginComponent = class LoginComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.password = "";
        this.usuarioCadastrado = false;
    }
    ngOnInit() { }
    login() {
        this.usuarioCadastrado = false;
        let param = `?email=${this.email}`;
        this.loginService.pesquisaEmail(param).subscribe((resp) => {
            if (resp.length) {
                this.usuarioCadastrado = true;
                if (this.password) {
                    param += `&password=${this.password}`;
                    this.loginService.login(param).subscribe((response) => {
                        this.userLoggedIn = response[0];
                        eventDispatcher.next({ type: ActionTypes.LOGGED_IN_USER, payload: this.userLoggedIn });
                        this.router.navigateByUrl('cardapio');
                    });
                }
            }
            else {
                this.router.navigateByUrl("cadastro");
            }
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map