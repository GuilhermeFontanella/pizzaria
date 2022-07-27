import { DialogModule } from 'primeng/dialog';
import { CardDinamicoModule } from './../../Componentes/Card/card-dinamico/card-dinamico.module';
import { CardDinamicoComponent } from './../../Componentes/Card/card-dinamico/card-dinamico.component';
import { CardapioComponent } from './cardapio.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    CardapioComponent,
  ],
  exports:[
    CardapioComponent,
  ],
  
  imports: [
    CommonModule,
    CardDinamicoModule,
    DialogModule,
    TooltipModule
  ]
})
export class CardapioModule { }
