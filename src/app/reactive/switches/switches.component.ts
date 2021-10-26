import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: []
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.formBuilder.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Podemos utilizar el operado ... para añadir las propiedades que persona no tiene
    this.miFormulario.reset({ ...this.persona, condiciones: true });

    // Nos subscribimos a los cambios del formulario para que actualice la variable de persona
    this.miFormulario.valueChanges.subscribe(({ condiciones, ...resto }) => {
      // Al desestructurar estamos haciendo que se extraiga condiciones y que el resto de 
      // propiedades se metan a la variable resto
      this.persona = resto;

      // Asi se haria con javascript y sin desestructurar
      // delete form.condiciones;
      // this.persona = form;
    });
  }

  guardar(): void {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;
    this.persona = formValue;
  }

}
