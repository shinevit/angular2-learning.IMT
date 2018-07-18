import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  todoText: string = '';

  @Output("addNewTodo")
  addNewTodoEmiter = new EventEmitter<string>();

  warningHide: boolean = true;


  constructor() { }


  ngOnInit() {
  }

  onAddBtnClick() {
    this.addBtnClickHandle();
  }

  addBtnClickHandle() {
    if ( !this.todoText || this.todoText.length === 0 ) {
      this.warningHide = false;
      return;
    }
    const text = this.todoText.trim();
    this.addNewTodoEmiter.emit(text);
    this.todoText = "";
    this.warningHide = true;
  }

}
