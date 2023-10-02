import { Component, OnInit } from '@angular/core';
import { Itodo } from './itodo';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const data = localStorage.getItem("todos");
    if(data !== '' && data !== null){
      this.todos = JSON.parse(data);
    }
  }

  constructor(private loggingService: LoggingService) {
  }

  logging(msg: any){
    this.loggingService.log(msg);
  }

  todos: Itodo[] = [];
  newTodo = '';
  placeholder = 'Enter a new Todo!';

  toggleTodo(index: number){
    this.todos[index].done = !this.todos[index].done;
    this.storeTodos();
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1);
    this.storeTodos();
  }

  setTodo(event: KeyboardEvent){
    const input = (event.target as HTMLInputElement)
    this.newTodo = input.value;
  }

  addTodo(){
    if (this.newTodo.trim() !== "") {
      this.todos.push({todo: this.newTodo, done: false});
    }
    this.storeTodos();
    this.newTodo = '';
    //this.logging(this.todos);
  }

  countOpenTodos(){
    const unDone = this.todos.filter(item => !item.done);
    return unDone;
  }

  storeTodos(){
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  title = 'Todo-app';
}
