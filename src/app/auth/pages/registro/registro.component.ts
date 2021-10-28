import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['Miguel Gonzalez', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    // Forma alternativa estandar para validar que es email aunque yo utilizare un pattern personalizado más estricto
    // email: ['', [Validators.required, Validators.email]] 
    username: ['', [Validators.required, this.validatorService.validacionPersonalizada]]

  });

  constructor(private formBuilder: FormBuilder, private validatorService: ValidatorService) { }

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
