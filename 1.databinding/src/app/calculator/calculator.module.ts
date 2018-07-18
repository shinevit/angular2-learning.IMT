import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { OperandComponent } from './operand/operand.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CalculatorComponent],
  declarations: [CalculatorComponent, OperandComponent]
})
export class CalculatorModule { }
