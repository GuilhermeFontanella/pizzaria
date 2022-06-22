import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDinamicoComponent } from './card-dinamico.component';



@NgModule({
  declarations: [
    CardDinamicoComponent,
  ],
  exports:[
    CardDinamicoComponent,
  ],
  
  imports: [
    CommonModule,
    CardModule,
  ]
})
export class CardDinamicoModule { }
