import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operand',
  templateUrl: './operand.component.html',
  styleUrls: ['./operand.component.css']
})
export class OperandComponent implements OnInit {
  @Input('label') title: string;
  @Input() value: number;
  @Output('onValueChange') valueChangeEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onInputInput(e) {
    const value = Number(e.target.value); // +e.target.value
    this.valueChangeEvent.emit(value);
    console.log(value);
  }

}
