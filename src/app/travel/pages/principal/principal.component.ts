import {Component,ElementRef,Renderer2,ViewChild,} from '@angular/core';
import {FormBuilder,FormGroup,Validators,} from '@angular/forms';
import { Travelinterface } from '../../interfaces/travelinterface';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent {
  @ViewChild('nuevo_texto', { static: false }) nuevocampo:| ElementRef | undefined;
  public expresion = '[^@ \t\r\n]+@gmail.com' || '[^@ \t\r\n]+@outlook.com';
  public tipadocorreo() {
    return (fg: FormGroup) => {
      const correo = fg.get('correo_usuario');
      const Expresion1 = new RegExp('[^@ \t\r\n]+@gmail.com');
      const Expresion2 = new RegExp('[^@ \t\r\n]+@outlook.com');
      const resultado = Expresion1.test(correo!.value);
      const resultado2 = Expresion2.test(correo!.value);
      if (resultado === true || resultado2 === true) {
        return correo?.setErrors(null);
      }
      return correo?.setErrors({
        correo: false,
      });
    };
  }
  miformulario: FormGroup = this.fb.group(
    {
      nombre_usuario: ['', [Validators.required, Validators.minLength(3)]],
      correo_usuario: ['', [Validators.required]],
    },
    { validators: this.tipadocorreo() }
  );
  constructor(private fb: FormBuilder, private renderer: Renderer2) {}
  CampoNovalido(campo: string) {
    return (
      this.miformulario.controls[campo].errors &&
      this.miformulario.controls[campo].touched
    );
  }
  public guardar() {
    if (this.miformulario.invalid) {
      return this.miformulario.markAllAsTouched();
    } else if (this.miformulario.valid) {
      this.miformulario.value;
      const nombre = this.renderer.createText(
        `¡Muchas Gracias por suscribirte!, ${this.miformulario.controls['nombre_usuario'].value} Te mantendremos al tanto de las nuevas ofertas.`
      );
      this.renderer.appendChild(this.nuevocampo?.nativeElement, nombre);
    }

    this.miformulario.reset();
  }
}
