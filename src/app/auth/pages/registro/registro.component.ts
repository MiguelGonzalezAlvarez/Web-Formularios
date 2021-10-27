import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  validacionPersonalizada(control: FormControl) {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'miguelmuros') {
      return { validacionPersonalizada: true }
    }
    return null;
  }

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['Miguel Gonzalez', [Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    // Forma alternativa estandar para validar que es email aunque yo utilizare un pattern personalizado más estricto
    // email: ['', [Validators.required, Validators.email]] 
    username: ['', [Validators.required, this.validacionPersonalizada]]

  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Miguel Gonzalez Alvarez',
      email: 'miggonzalv@gmail.com',
      username: 'MiguelMuros'
    });
  }

  campoValido(campo: string) {
    return !(this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched);
  }

  submitForm() {
    this.miFormulario.markAllAsTouched();
  }

}
