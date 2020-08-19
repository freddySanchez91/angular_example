import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Administración';
  saludo = 'Esto es un saludo';

}
