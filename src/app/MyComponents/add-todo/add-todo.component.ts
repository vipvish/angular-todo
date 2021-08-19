import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  title!: string;
  desc!: string;

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  todoForm = new FormGroup({
    title: new FormControl('', Validators.required),
    desc: new FormControl(''),
  });

  constructor() {
    this.title = '';
    this.desc = '';
  }

  ngOnInit(): void {}

  onSubmit(val: any) {
    console.log(val);

    if (val.title === '' && val.desc === '') {
      alert('Enter title and description');
    } else {
      const todo = {
        sno: 8,
        title: val.title,
        desc: val.desc,
        active: true,
      };
      this.todoAdd.emit(todo);
      this.title = '';
      this.desc = '';
    }
  }
}
