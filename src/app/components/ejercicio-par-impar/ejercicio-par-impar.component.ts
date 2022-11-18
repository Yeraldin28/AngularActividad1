import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio-par-impar',
  templateUrl: './ejercicio-par-impar.component.html',
  styleUrls: ['./ejercicio-par-impar.component.css']
})
export class EjercicioParImparComponent {

  public numero:number=8;
public mensaje:string="";
  verificar(){



    if (this.numero > 0) {
   //     window.alert("el numero "+this.numero+" es positivo");
   this.mensaje="el numero "+this.numero+" es positivo";
    } else if (this.numero == 0) {
    //    window.alert("El 0 es un numero neutro ");
    this.mensaje="El 0 es un numero neutro";
    }else {
    //    window.alert("el numero "+this.numero+" es negativo");
    this.mensaje="el numero "+this.numero+" es negativo";
    } 



  }

}
