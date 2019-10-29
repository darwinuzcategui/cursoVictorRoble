import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders, routing} from './app.routing';

import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.components';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { TestComponent } from './components/test/test.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PiepaginaComponent } from './components/piepagina/piepagina.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { UnvenddorComponent } from './components/unvenddor/unvenddor.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    VendedorComponent,
    TestComponent,
    EncabezadoComponent,
    SliderComponent,
    SidebarComponent,
    PiepaginaComponent,
    HomeComponent,
    BlogComponent,
    FormularioComponent,
    PaginaComponent,
    ErrorComponent,
     UnvenddorComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
