import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-item/model/TodoItem';

const MockData = [
  {text: 'Take out a garbage'},
  {text: 'Whash up'},
  {text: 'Shopping'}
];

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items = new Array<TodoItem>();

  private _newTodoText: string

  get newTodoText() {
    return this._newTodoText;
  }
  @Input("onNewTodoText")
  set newTodoText(value: string) {
    if ( !value ) {
      return;
    }
    this._newTodoText = value;
    this.addNewItem(new TodoItem(this._newTodoText));
  }

  constructor() {
    this.initData();
  }

  ngOnInit() {  }

  initData() {
    for (const item of MockData) {
      const todoItem = new TodoItem(item.text);
      this.items.push(todoItem);
    }
  }

  onDeleteItem(el) {
    this.deleteItem(el);
  }
  onClickItem(el) {
    this.changeState(el);
  }


  addNewItem(item: TodoItem) {
    this.items = [item, ...this.items]; // add to head
  }

  deleteItem(item: TodoItem) {
    const left = this.items.slice(0, this.items.indexOf(item));
    const right = this.items.slice(this.items.indexOf(item) + 1, this.items.length);
    this.items = left.concat(right);
  }

  changeState(item: TodoItem) {
    const left = this.items.slice(0, this.items.indexOf(item));
    const right = this.items.slice(this.items.indexOf(item) + 1, this.items.length);
    this.items = [...left, item, ...right];
  }

}
