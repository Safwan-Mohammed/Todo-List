import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoList } from '../../TodoList';

@Component({
  selector: 'app-add-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo-list.component.html',
  styleUrl: './add-todo-list.component.css'
})
export class AddTodoListComponent {
    title: string = '';
    desc: string = ''

    @Output() todoAdd: EventEmitter<TodoList> = new EventEmitter

    onSubmit() : void{
      const todo : TodoList = {
        title: this.title,
        desc: this.desc
      }
      this.todoAdd.emit(todo)
    }
}
