import { __decorate } from "tslib";
import { DialogModule } from 'primeng/dialog';
import { CardDinamicoModule } from './../../Componentes/Card/card-dinamico/card-dinamico.module';
import { CardapioComponent } from './cardapio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
let CardapioModule = class CardapioModule {
};
CardapioModule = __decorate([
    NgModule({
        declarations: [
            CardapioComponent,
        ],
        exports: [
            CardapioComponent,
        ],
        imports: [
            CommonModule,
            CardDinamicoModule,
            DialogModule,
            TooltipModule
        ]
    })
], CardapioModule);
export { CardapioModule };
//# sourceMappingURL=cardapio.module.js.map