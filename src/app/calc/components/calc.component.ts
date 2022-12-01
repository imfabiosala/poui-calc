import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent implements OnInit {

  private num1: string;
  private num2: string;
  private res:  number;
  private opr:  string;

  constructor(private calcService:CalcService) { }

  /* Ao iniciar, já efetua a limpeza/reinicialização das vairáveis */

  ngOnInit() {

    this.clear();

  }

  /* "Limpa/Reinicia" os valores das variáveis. */

  clear(): void {

    this.num1 = '0';
    this.num2 = null;
    this.res  = null;
    this.opr  = null;

  }

  /* Efetua a concatenação da expressão para efetuar o cálculo. */

  concExp(exp: string, num: string): string {

    if (exp === '0' || exp === null) {
      exp = '';
    }

    if (num === '.' && exp === '') {
      return '0.';
    }

    if (num === '.' && exp.indexOf('.') > -1) {
  	  return exp;
  	}

    return exp + num;

  }

  /* Adiciona o número selecionado para ser calculado posteriormente. */

  addNum(num: string): void {

    if (this.opr === null) {
      this.num1 = this.concExp(this.num1, num)
    } else {
      this.num2 = this.concExp(this.num2, num)
    }

  }

  /* Define a operação */

  addOpr(opr: string): void {

    if (this.opr === null) {
      this.opr = opr;
      return;
    }
    
    if (this.num2 !== null) {
  		this.res = this.calcService.calc(
  			parseFloat(this.num1),
  			parseFloat(this.num2),
  			this.opr);
  		this.opr = opr;
  		this.num1 = this.res.toString();
  		this.num2 = null;
  		this.res = null;
  	}

  }

  /* Calcular */

  calc(): void {

    if (this.num2 === null) {
      return;
    }

    this.res = this.calcService.calc(
      parseFloat(this.num1),
      parseFloat(this.num2),
      this.opr
    );

  }

  /* Retorna o resultado a ser exibido */

  get display(): string {

    if (this.res !== null) {
      return this.res.toString();
    }

    if (this.num2 !== null) {
      return this.num2;
    }

    return this.num1;

  }

}