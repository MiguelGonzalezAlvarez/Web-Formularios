import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['Miguel Gonzalez', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    // Forma alternativa estandar para validar que es email aunque yo utilizare un pattern personalizado más estricto
    // email: ['', [Validators.required, Validators.email]] 

  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Miguel Gonzalez Alvarez',
      email: 'miggonzalv@gmail.com'
    });
  }

  campoValido(campo: string) {
    return !(this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched);
  }

  submitForm() {
    this.miFormulario.markAllAsTouched();
  }

}
