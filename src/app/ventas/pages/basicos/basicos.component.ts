import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = "brian"
  nombreUpper: string = 'BRIAN'
  nombreCompleto: string = 'bRian pErEz'
  fecha: Date = new Date()

}
