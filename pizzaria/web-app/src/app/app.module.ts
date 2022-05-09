import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Ripple, RippleModule } from 'primeng/ripple';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
