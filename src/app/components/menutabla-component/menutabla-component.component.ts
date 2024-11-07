import { Component } from '@angular/core';

@Component({
  selector: 'app-menutabla-component',
  templateUrl: './menutabla-component.component.html',
  styleUrl: './menutabla-component.component.css'
})
export class MenutablaComponentComponent {

  numeros: number[];

  constructor(){
    this.numeros = this.rellenarNumeros()
  }

  rellenarNumeros(): number[] {
    let nums: number[] = []
    for (let i = 0; i < 6; i++) {
      nums.push(Math.floor(Math.random() * 10))
    }
    return nums;
  }

}
