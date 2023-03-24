import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';



@NgModule({
  declarations: [BasicosComponent, NumerosComponent, NoComunesComponent],
  exports:[BasicosComponent, NumerosComponent, NoComunesComponent],
  imports: [
    CommonModule, PrimeNgModule
  ]
})
export class VentasModule { }
