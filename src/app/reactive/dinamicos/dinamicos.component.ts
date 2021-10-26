import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Dark Souls', Validators.required],
      ['Bloodborne', Validators.required],
      ['Sekiro Shadows Die Twice', Validators.required]
    ], [Validators.required, Validators.minLength(2)])
    // Esta parte nos valida que tengamos al menos 2 favoritos
  });

  nuevoFavorito: FormControl = this.formBuilder.control('', Validators.required);

  get favoritosArray() {
    // Retornamos el array de favoritos como un form array
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  campoEsValido(campo: string): boolean {
    return !this.miFormulario.controls[campo].errors || !this.miFormulario.controls[campo].touched;
  }

  agregarFavorito(): void {
    if (this.nuevoFavorito.valid) {
      this.favoritosArray.push(this.formBuilder.control(this.nuevoFavorito.value, Validators.required));
      this.nuevoFavorito.reset();
    }
  }

  eliminarFavorito(posicion: number): void {
    this.favoritosArray.removeAt(posicion);
  }

  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    // Imprimir el valor del formulario solo si es valido
    console.log(this.miFormulario.value);
  }


}
