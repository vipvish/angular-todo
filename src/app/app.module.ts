import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';
import { PageNotFoundComponent } from './MyComponents/page-not-found/page-not-found.component';
import { CustomStyleDirective } from './MyComponents/directives/custom-style.directive';
import { TitleFormatePipe } from './MyComponents/pipe/title-formate.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module'; 
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    PageNotFoundComponent,
    CustomStyleDirective,
    TitleFormatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
