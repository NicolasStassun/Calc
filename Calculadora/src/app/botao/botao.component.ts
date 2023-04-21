import { Component, OnInit } from '@angular/core';
import { parse } from 'querystring';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent{

  

  click(event: any): void{

    let expressao = document.getElementById('expressoes')
    let botao = document.querySelectorAll('.botoes');
    let zero = document.getElementById('zero');
    let expressoes = document.querySelectorAll('.operadores');
    let igual = document.getElementById('igual');
    let botaoClicado = event.target;
    let valor = event.target.innerText;

    console.log(valor)

    expressao.innerText += valor


  }
  calcular(event: any): boolean {

    let teste = document.getElementById('expressoes')
    let expressao = teste.innerText
    const partes = expressao.split(/([\+\-\×\÷])/);
    let resultado = parseFloat(partes[0]);

    let botaoClicado = event.target;
  
    for (let i = 1; i < partes.length; i += 2) {
      const operador = partes[i];
      const valor = parseFloat(partes[i + 1]);
  
      if (operador === "+") {
        resultado += valor;
      } else if (operador === "-") {
        resultado -= valor;
      } else if (operador === "×") {
        resultado *= valor;
      } else if (operador === "÷") {
        resultado /= valor;
      }
    }
    console.log(expressao)
    console.log(resultado)

    let print = resultado.toString()

    teste.innerText = print

    return true;

}
CE(): void{


 let expressao = document.getElementById('expressoes')
 expressao.innerText = " "

}

  

}
