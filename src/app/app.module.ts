import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraSalarioComponent } from './calculadora-salario/calculadora-salario.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraSalarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
