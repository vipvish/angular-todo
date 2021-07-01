import { Todo } from './../../Todo';
import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Input() i: number | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo : Todo){
    this.todoDelete.emit(todo)
    console.log('delete')
  }

  onCheckBoxClick(todo : Todo) {
    this.todoCheckbox.emit(todo);
  }
}
