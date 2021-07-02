import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  title!:string;
  desc!: string;
  
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.title = '';
    this.desc = '';
  }

  ngOnInit(): void {
  }

  onSubmit() {

    console.log(this.title);
    
    if ((this.title === '') && (this.desc === '')){
      alert('Enter title and description');
    } else {
      const todo = {
        sno: 8,
        title: this.title,
        desc: this.desc,
        active : true
      }
      this.todoAdd.emit(todo);
      this.title = '';
      this.desc = '';
    }
    
  }

}
