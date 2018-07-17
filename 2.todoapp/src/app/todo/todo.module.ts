import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddNewComponent } from './add-new/add-new.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoListComponent, AddNewComponent, TodoItemComponent]
})
export class TodoModule { }
