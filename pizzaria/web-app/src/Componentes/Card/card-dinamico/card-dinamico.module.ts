import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDinamicoComponent } from './card-dinamico.component';
import { SkeletonModule } from 'primeng/skeleton';
import {ProgressSpinnerModule} from 'primeng/progressspinner';



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
    SkeletonModule,
    ProgressSpinnerModule
  ]
})
export class CardDinamicoModule { }
