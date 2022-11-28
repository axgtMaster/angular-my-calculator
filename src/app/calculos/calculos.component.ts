import { Component } from "@angular/core";

@Component({
    selector: 'app-calculos',
    templateUrl: './calculos.component.html',
    styleUrls: ['./calculos.component.css']
})

export class CalculosComponent{

    titulo:string = 'Calculadora-app';
    
    total:number = 0
    mostrar = true;

    /*constructor(numeroUno_: number, numeroDos_: number)
    {
        this.numeroUno = numeroUno_
        this.numeroDos = numeroDos_
    }*/

    resultadoCalculado(suma: number){
        this.total = suma;
    }
}