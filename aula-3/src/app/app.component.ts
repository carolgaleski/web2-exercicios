import { Component } from '@angular/core';
import * as mod1 from './modulo1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = mod1.texto;
}
