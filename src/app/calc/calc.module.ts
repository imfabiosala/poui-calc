import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcComponent } from './components'; /* Import Calc Module (index) */
import { CalcService } from './services'; /* Import Calc Service (index) */

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
  ],
  providers: [
    CalcService
  ]
})

export class CalcModule { }