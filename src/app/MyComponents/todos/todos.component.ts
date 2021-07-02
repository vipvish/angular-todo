import { Todo } from './../../Todo';
import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../services/todo-data.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  localItem: string;
  todos: Todo[];
  
  constructor(private todoData: TodoDataService) {
    
    // this.todoData.getData().subscribe(data => {
    //   console.log(data);
    //   this.todos = data
    // })

    this.localItem = localStorage.getItem("todos")!;
   
    if (this.localItem == null)
    {
      this.todos = [];
    }
    else
    {
      this.todos = JSON.parse(this.localItem);
    }
    
  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo:Todo){
    console.log(todo)
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
