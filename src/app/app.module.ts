import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalcModule } from './calc/calc.module'; /* Import Calc Module */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalcModule /* Import Calc Module */
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }