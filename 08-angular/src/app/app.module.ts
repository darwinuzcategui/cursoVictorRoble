import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.components';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { TestComponent } from './components/test/test.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    VendedorComponent,
    TestComponent,
    EncabezadoComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
