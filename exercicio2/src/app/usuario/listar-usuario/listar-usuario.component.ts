import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-usuario',
  standalone: false,
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.css'
})
export class ListarUsuarioComponent {
  usuarios = [
    { id: 1, nome: 'Carol'},
    { id: 2, nome: 'Maria'},
    { id: 3, nome: 'Marco'}

  ];

}
