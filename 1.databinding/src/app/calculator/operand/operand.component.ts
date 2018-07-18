import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-operand',
  templateUrl: './operand.component.html',
  styleUrls: ['./operand.component.css']
})
export class OperandComponent implements OnInit, OnChanges {
  @Input('label')
  title: string;

  @Input()
  value: number;

  @Output('onValueChange')
  valueChangeEvent = new EventEmitter<number>();

  div: number;


  constructor() { }

  ngOnInit() {
    console.log("init");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    if (changes.value) {
      this.calclucateDiv(changes.value.currentValue);
    }
  }



  onInputInput(e) {
    const value = Number(e.target.value); // +e.target.value
    const oldValue = this.value;
    this.valueChangeEvent.emit(value);
    console.log(`Change by input event: oldValue=${oldValue}, newValue=${value}`);
  }


  calclucateDiv(value: number) {
    this.div = value / 10;
  }
}
