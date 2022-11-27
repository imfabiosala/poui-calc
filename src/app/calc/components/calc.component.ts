import { Component, OnInit } from '@angular/core';
import { CalcService } from '../services';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})

export class CalcComponent implements OnInit {

  constructor(private calcService:CalcService) { }

  ngOnInit(): void {
    this.calcService
  }

}
