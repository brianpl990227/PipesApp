import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    MenuComponent,
    TestComponent
  ],
  exports:[MenuComponent, TestComponent],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
