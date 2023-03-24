import { Component } from '@angular/core';

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

  //i18nPlural
  clientes: string[] = ['Maria', 'Perdro', '', '', '', '']
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
