import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ActionTypes, eventDispatcher, store } from './diretorio/actions';
let AppComponent = class AppComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.title = 'pizzaria';
        store.subscribe((state) => {
            if (!state) {
                return;
            }
            else {
                this.userLoggedIn = state;
                this.loggedUser = sessionStorage.setItem('loggedUser', this.userLoggedIn);
            }
        });
    }
    ngOnInit() {
        eventDispatcher.next({ type: ActionTypes.LOGGED_IN_USER });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map