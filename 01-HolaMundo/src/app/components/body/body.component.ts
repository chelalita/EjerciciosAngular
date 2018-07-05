import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {
  mostrar = true;

  frase: any = {
      mensaje: 'Un gran poder requiere una gran responsabilidad',
      autor: 'Ben Parker'
  };

  personajes:string[] = ['Spiderman','Venom','Dr. Octopus'];
  todos: any[];
  constructor() {

    this.todos = [
      {
        'title':"First Todo",
        'done':false
      },
      {
        'title':"Second Todo",
        'done':false
      }];
  }
  addTodo( todo ) {
    this.todos.push({ 'title': todo.value, 'done':false });
    todo.value = '';
  }
  clearCompleted(){
    this.todos = this.todos.filter((item) => {
        return !item.done;
    });
  }
}
