import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoList } from '../../TodoList';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
  @Input() todo!: TodoList
  @Output() todoDelete : EventEmitter<TodoList> = new EventEmitter

  deleteTodo(todo: TodoList) : void {
    this.todoDelete.emit(todo)
  }

}
