import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { InputComponent } from './input/input.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TodoComponent],
  declarations: [TodoComponent, TodoListComponent, TodoItemComponent, InputComponent]
})
export class TodoModule { }
