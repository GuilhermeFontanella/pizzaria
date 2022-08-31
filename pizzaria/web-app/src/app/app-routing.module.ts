import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { UnidadesComponent } from './unidades/unidades.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
