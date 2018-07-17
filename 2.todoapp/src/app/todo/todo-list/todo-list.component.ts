import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item/TodoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items = new Array<TodoItem>();

  constructor() {

  }

  ngOnInit() {

  }



  addNewItem(item: TodoItem) {

  }

  deleteItem(item: TodoItem) {

  }

}
