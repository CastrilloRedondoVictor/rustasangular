import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-numdoble',
  templateUrl: './numdoble.component.html',
  styleUrl: './numdoble.component.css'
})
export class NumdobleComponent implements OnInit {
  numero!: number;
  doble!: number;


  constructor(private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit(): void {
    // Access the 'id' parameter from the route
    this._route.params.subscribe(params => {
      this.numero = params['num']
      if(this.numero){
        this.doble = this.numero * 2
      }
    });
  }

  enviarNum(num?: number): void {
    num ? this._router.navigate(['/numdoble', num]) : this._router.navigate(['/numdoble'])
  }
}
