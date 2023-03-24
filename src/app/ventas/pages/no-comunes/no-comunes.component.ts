import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Brian'
  genero: string = 'masculino'
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  persona = {
    nombre: 'Brian',
    edad: 24,
    direccion: 'La Habana, Cuba (por desgracia)'
  }

  heroes = [
    {
      nombre: 'Ironman',
      edad: 33,
      poder: 'Vuela'
    },
    {
      nombre: 'Spiderman',
      edad: 17,
      poder: 'Araña' 
    }
  ]

  miObservable = interval(1000)

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa')
    }, 5000)
  })

  //i18nPlural
  clientes: string[] = ['Maria', 'Perdro', 'Brian', 'Adrian', 'Mengao', 'Usuario']
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'



  }

  cambiarNombre()
  {
    
    if(this.genero == 'masculino')
    {
      console.log(this.genero)
      this.genero = 'femenino'
      this.nombre = 'Nancy'
    }
    else
    {
      this.genero = 'masculino'
      this.nombre = 'Brian'
    }
  }

  borrarCliente()
  {
    this.clientes.pop()
  }

}
