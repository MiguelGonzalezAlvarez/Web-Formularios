import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  validacionPersonalizada = (control: FormControl) => {
    const valor: string = control.value?.trim().toLowerCase();
    if (valor === 'miguelmuros') {
      return { validacionPersonalizada: true }
    }
    return null;
  }

  camposIguales(campo1: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {

      const password1 = formGroup.get(campo1)?.value;
      const password2 = formGroup.get(campo2)?.value;

      if (password1 !== password2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return { noIguales: true }
      }

      // Esta linea quita toda validacion que tuvieramos
      // asi que hay que usarlo con cuidado
      formGroup.get(campo2)?.setErrors(null);
      return null;
    }
  }

}
