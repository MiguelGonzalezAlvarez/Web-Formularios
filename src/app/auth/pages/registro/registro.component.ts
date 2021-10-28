import { getParseErrors } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
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
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    // Forma alternativa estandar para validar que es email aunque yo utilizare un pattern personalizado más estricto
    // email: ['', [Validators.required, Validators.email]] 
    username: ['', [Validators.required, this.validatorService.validacionPersonalizada]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmacion: ['', [Validators.required]]
  }, {
    validators: [this.validatorService.camposIguales('password', 'confirmacion')]
  });

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Miguel Gonzalez Alvarez',
      email: 'miggonzalv@gmail.com',
      username: 'MiguelMuros',
      password: 'password',
      confirmacion: 'password'
    });
  }

  campoValido(campo: string) {
    return !(this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched);
  }

  emailRequired() {
    return this.miFormulario.get('email')?.errors?.required && this.miFormulario.get('email')?.touched;
  }

  emailFormato() {
    return this.miFormulario.get('email')?.errors?.pattern && this.miFormulario.get('email')?.touched;
  }

  emailTomado() {
    return this.miFormulario.get('email')?.errors?.emailTomado && this.miFormulario.get('email')?.touched;
  }

  submitForm() {
    this.miFormulario.markAllAsTouched();
  }

}
