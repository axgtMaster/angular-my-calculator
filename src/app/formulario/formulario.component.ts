import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() calculoResultado = new EventEmitter<number>();
  
    numeroUno: number = 0;
    numeroDos: number = 0;
  
    sumar(numeroUno:number, numeroDos:number): void{
      console.log(numeroUno + numeroDos)
      console.log("uno: " + this.numeroUno)
      console.log("dos: " + this.numeroDos)
     // this.total = numeroUno + numeroDos
     this.calculoResultado.emit(numeroUno + numeroDos);
    }
}
