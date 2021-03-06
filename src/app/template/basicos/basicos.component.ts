import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Algo',
    precio: 10,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(): void {
    this.miFormulario.resetForm({
      producto: '',
      precio: 0,
      existencias: 0
    });
  }

  nombreValido(): boolean {
    const invalid = this.miFormulario?.controls.producto?.invalid;
    const touched = this.miFormulario?.controls.producto?.touched;

    return invalid && touched;
  }

  precioValido(): boolean {
    const isNegative = this.miFormulario?.controls.precio?.value < 0;
    const touched = this.miFormulario?.controls.precio?.touched;

    return isNegative && touched;
  }

}
