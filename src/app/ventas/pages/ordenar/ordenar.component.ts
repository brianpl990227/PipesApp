import { Component, Pipe } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  toggle: boolean = true
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde
    }
  ]

  termino: string = ''

  cambiarTermino(nuevoTermino: string)
  {
    this.termino = nuevoTermino;
  }

  cambiar()
  {
    this.toggle = !this.toggle;
  }

}
