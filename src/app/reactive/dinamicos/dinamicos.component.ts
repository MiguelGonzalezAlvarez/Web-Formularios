import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [0, [Validators.required, Validators.min(0)]],
    existencias: [0, [Validators.required, Validators.min(0)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'Miguel Gonzalez Alvarez'
    });
  }

  campoEsValido(campo: string): boolean {
    return !this.miFormulario.controls[campo].errors || !this.miFormulario.controls[campo].touched;
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
