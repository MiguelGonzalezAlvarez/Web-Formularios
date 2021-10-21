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

  nuevoFavorito = '';
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

  agregarFavorito(): void {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoFavorito
    };
    
    this.persona.favoritos.push(nuevoFavorito);
  }

  eliminarFavorito(index: number): void {
    this.persona.favoritos.splice(index, 1);
  }

}
