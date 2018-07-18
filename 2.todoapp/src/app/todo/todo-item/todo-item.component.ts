import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from './model/TodoItem';
import { ColorUtils } from '../../common/ColorUtils';
import { TodoStateEnum } from '../todo-item/model/TodoStateEnum';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input('item')
  item: TodoItem;

  private _indexItem: number
  get indexItem() {
    return this._indexItem;
  }
  @Input('index')
  set indexItem(value) {
    this._indexItem =  value;
    this.item.id = value + 1;
  }

  @Output('deleteItem')
  deleteItemEmitter = new EventEmitter<TodoItem>();

  @Output('clickItem')
  clickItemEmitter = new EventEmitter<TodoItem>();

  randomColor = ColorUtils.newRandomColor();


  constructor() {
  }

  ngOnInit() {
  }


  onItemClick(item: TodoItem) {
    this.itemClickHandle(item);
  }

  onBtnDeleteClick(item) {
    this.buttonDeleteHandle(item);
  }


  itemClickHandle(item: TodoItem) {
    this.changeTaskStatus(item);
    this.clickItemEmitter.emit(item);
  }

  buttonDeleteHandle(item: TodoItem) {
    this.deleteItemEmitter.emit(item);
  }

  changeTaskStatus(item: TodoItem) {
    item.status = (item.status !== TodoStateEnum.Completed) ?
                    TodoStateEnum.Completed :
                    TodoStateEnum.New;
  }

  isTaskCompleted() {
    return this.item.status === TodoStateEnum.Completed;
  }

}
