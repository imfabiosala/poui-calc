import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './components'; /* Import Calc Module (index) */

/* import { CalcComponent } from './components/calc.component'; Import Calc Module */

@NgModule({
  declarations: [
    CalcComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalcComponent
  ]
})

export class CalcModule { }