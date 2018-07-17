import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  operandA: number = 10;
  operandB: number = 5;
  result: number;

  constructor() { }

  ngOnInit() {
  }

  onCaclulateBtnClick() {
    this.caclulateResult();
  }

  onOperandValueChange(operandName: string, value: number) {
    this[operandName] = value; // call property of this CalculatorComponent
    // this.caclulateResult();
  }

  caclulateResult() {
    this.result = this.operandA + this.operandB;
  }
}
