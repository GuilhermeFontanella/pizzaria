import { __decorate } from "tslib";
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDinamicoComponent } from './card-dinamico.component';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
let CardDinamicoModule = class CardDinamicoModule {
};
CardDinamicoModule = __decorate([
    NgModule({
        declarations: [
            CardDinamicoComponent,
        ],
        exports: [
            CardDinamicoComponent,
        ],
        imports: [
            CommonModule,
            CardModule,
            SkeletonModule,
            ProgressSpinnerModule
        ]
    })
], CardDinamicoModule);
export { CardDinamicoModule };
//# sourceMappingURL=card-dinamico.module.js.map