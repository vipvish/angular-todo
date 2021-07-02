import { Component } from '@angular/core';
import { TodoDataService } from './MyComponents/services/todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todos';

  constructor(private todo:TodoDataService){
    console.log(this.todo.getData())
  }

}
