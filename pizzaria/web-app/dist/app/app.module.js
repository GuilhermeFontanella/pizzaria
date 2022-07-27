import { __decorate } from "tslib";
import { CardapioModule } from './cardapio/cardapio.module';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DialogModule } from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { LoginComponent } from './login/login.component';
import { FormsModule, } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HttpClientModule } from '@angular/common/http';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { UnidadesComponent } from './unidades/unidades.component';
import { PedidoComponent } from './pedido/pedido.component';
import { SkeletonModule } from 'primeng/skeleton';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ChipsModule } from 'primeng/chips';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            CadastroComponent,
            MenuComponent,
            UnidadesComponent,
            PedidoComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            CardModule,
            ButtonModule,
            RippleModule,
            InputTextModule,
            RouterModule,
            HttpClientModule,
            PasswordModule,
            InputMaskModule,
            FormsModule,
            BrowserAnimationsModule,
            MenubarModule,
            DialogModule,
            CardapioModule,
            SkeletonModule,
            StepsModule,
            ToastModule,
            ChartModule,
            RadioButtonModule,
            ChipsModule,
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map