import { NgModule, LOCALE_ID, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeNGConfig } from "primeng/api";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localEs from '@angular/common/locales/es-CU'
import localFr from '@angular/common/locales/fr'
import { registerLocaleData } from "@angular/common";
registerLocaleData(localEs)
registerLocaleData(localFr)

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    AppRoutingModule,
    VentasModule
  ],
  providers: [
    //Para el idioma
    {
    provide: LOCALE_ID,
    useValue: 'es-CU'
  }],
  bootstrap: [AppComponent],
  schemas:[]
})
export class AppModule{




 }
