import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddTodoListComponent } from "./Components/add-todo-list/add-todo-list.component";
import { TodoListItemComponent } from './Components/todo-list-item/todo-list-item.component';
import { TodoList } from './TodoList';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, AddTodoListComponent, TodoListItemComponent]
})
export class AppComponent {
  title : string = 'TodoList';
  todoArray : TodoList[] = []

  addTodo(todo: TodoList) : void {
    console.log("Inside app.ts")
    this.todoArray.push(todo)
    console.log(this.todoArray)
  }

  deleteTodo(todo: TodoList) : void {
    const index : number = this.todoArray.indexOf(todo)
    this.todoArray.splice(index, 1)
  }
}
