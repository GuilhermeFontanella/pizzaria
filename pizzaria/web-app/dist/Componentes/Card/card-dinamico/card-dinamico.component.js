import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let CardDinamicoComponent = class CardDinamicoComponent {
    constructor() {
        this.loading = true;
        this.display = true;
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.loading = true;
        if (changes) {
            setTimeout(() => {
                this.loading = false;
            }, 700);
        }
    }
    showDialog() {
        this.display = true;
    }
};
__decorate([
    Input()
], CardDinamicoComponent.prototype, "pizzas", void 0);
__decorate([
    Input()
], CardDinamicoComponent.prototype, "loading", void 0);
CardDinamicoComponent = __decorate([
    Component({
        selector: 'app-card-dinamico',
        templateUrl: './card-dinamico.component.html',
        styleUrls: ['./card-dinamico.component.css']
    })
], CardDinamicoComponent);
export { CardDinamicoComponent };
//# sourceMappingURL=card-dinamico.component.js.map