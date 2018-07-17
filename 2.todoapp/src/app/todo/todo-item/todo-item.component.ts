import { Component, OnInit } from '@angular/core';
import { TodoStateEnum as TodoState} from './TodoStateEnum';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onDeleteOne() {

  }


  onChangeCompleted() {
    this.changeStatus(TodoState.Completed);
  }

  changeStatus(status: TodoState) {

  }

}
