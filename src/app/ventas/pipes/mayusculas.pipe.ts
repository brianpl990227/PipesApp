import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

  transform(termino: string, enMayusculas: boolean = true ): string {

    return enMayusculas ? termino.toUpperCase() : termino.toLowerCase();
    
  }

}
