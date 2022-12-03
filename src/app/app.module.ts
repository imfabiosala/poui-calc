import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalcModule } from './calc';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates'; /* Import Calc Module (index) */
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core'; /* Import Protheus Lib Core */

/* import { CalcModule } from './calc/calc.module'; Import Calc Module */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalcModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule, /* Import Calc Module */
    ProtheusLibCoreModule /* Import Protheus Lib Core */
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }