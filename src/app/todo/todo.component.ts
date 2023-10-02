import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo = {
    todo: '',
    done: false,
  };
  @Input() index = 0;

  @Output() todoIndex = new EventEmitter<number>();
  @Output() deleteIndex = new EventEmitter<number>();

  toggleTodo(){
     this.todoIndex.emit(this.index);
  }

  deleteTodo(){
    this.deleteIndex.emit(this.index);
  }
}
