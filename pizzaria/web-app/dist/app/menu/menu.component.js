import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { ActionTypes, eventDispatcher } from '../diretorio/actions';
let MenuComponent = class MenuComponent {
    constructor() {
        this.searchInput = new EventEmitter();
        this.search = '';
        this.items = [];
    }
    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: ' pi pi-home',
            },
            {
                label: 'Cardápio',
                icon: 'pi pi-book',
                url: 'http://localhost:4200/cardapio',
            },
            {
                label: 'Unidades',
                icon: 'pi pi-globe',
                url: 'http://localhost:4200/unidades',
            },
            {
                label: 'Dúvidas Frequentes',
                icon: 'pi pi-question-circle',
            },
            {
                label: 'Entrar/Cadastrar',
                icon: ' pi pi-user',
                url: 'http://localhost:4200',
            },
            {
                icon: ' pi pi-instagram',
            },
        ];
    }
    buscar() {
        this.searchInput.emit(this.search);
        eventDispatcher.next({ type: ActionTypes.BUCAR, payload: this.search });
    }
};
__decorate([
    Output()
], MenuComponent.prototype, "searchInput", void 0);
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.css']
    })
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map