import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrl: './tablamultiplicar.component.css'
})
export class TablamultiplicarComponent implements OnInit {

  numero!: number;
  resultados!: number[];

  constructor(
    private _route: ActivatedRoute
  ){}


  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.numero = params['num']
      this.resultados = this.rellenarTabla()
    })
  }

  rellenarTabla(): number[] {
    let results: number[] = []

    for (let i = 0; i <= 10; i++) {
      results.push(this.numero * i)
    }

    return results;
  }



}
