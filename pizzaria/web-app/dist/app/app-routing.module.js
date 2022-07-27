import { __decorate } from "tslib";
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { PedidoComponent } from './pedido/pedido.component';
const routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'cardapio',
        component: CardapioComponent
    },
    {
        path: 'unidades',
        component: UnidadesComponent
    },
    {
        path: 'pedido',
        component: PedidoComponent
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map