import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: []
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Miguel',
    favoritos: [
      { id: 1, nombre: 'Dark Souls' },
      { id: 2, nombre: 'Bloodborne' },
      { id: 3, nombre: 'Sekiro Shadows Die Twice' }
    ]
  }

  guardar(): void {

  }

  eliminar(index: number): void {
    this.persona.favoritos.splice(index, 1);

  }

}
