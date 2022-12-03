import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalcService {

  /* Definição das constantes utilizadas para as operações de cálculo. */

  /* Atributos */

  /* static   = indentifica que esta variável estará disponível em "escopo global". */
  /* readonly = identifica que esta variável será uma constante, ou seja, o seu valor não sofrerá alteração durante toda a execução. */
  /* SUM      = identifica o nome da variável. (não faz diferença se é maiúscula ou minúscula, porém, por padrão, quando se trata de constante é sempre utilizado maiúscula) */
  /* string   = tipagem da variável */
  /* '+'      = seu valor atribuído */

  static readonly SUM: string = '+'; /* Soma */
  static readonly SUB: string = '-'; /* Subtração */
  static readonly DIV: string = '/'; /* Divisão */
  static readonly MUL: string = '*'; /* Multiplicação */

  /* Métodos */

  calc(num1: number, num2: number, opr: string): number {

    let res: number; /* let = escopo local */

    switch(opr) {
    
      case CalcService.SUM:
        res = (num1 + num2);
        break;

      case CalcService.SUB:
        res = (num1 - num2);
        break;

      case CalcService.DIV:
        res = (num1 / num2);
        break;

      case CalcService.MUL:
        res = (num1 * num2);
        break;

      default:
        res = 0;
    
    }

    return res

  }

  constructor() { }

}