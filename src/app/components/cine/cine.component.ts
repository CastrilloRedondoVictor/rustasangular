import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {

  constructor(
    private _router: Router
  ){}

  returnHome(): void {
    this._router.navigate(['/'])
  }

}