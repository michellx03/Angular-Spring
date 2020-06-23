import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular!';
  curso: string = 'Spring 5 com Angular 7';
  aluno: string = 'Michell Cesar Alves Soares'
}
