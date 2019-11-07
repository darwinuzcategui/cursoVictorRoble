import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders, routing } from './app.routing';

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
import { EsparPipe } from './pipes/espar.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './components/productos/productos.component';
import { MomentModule } from 'angular2-moment';
import { UnproductoComponent } from './components/unproducto/unproducto.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ProductoNewComponent } from './components/producto-new/producto-new.component';
import { AngularFileUploaderModule } from 'angular-file-uploader';

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
    UnvenddorComponent,
    EsparPipe,
    ProductosComponent,
    UnproductoComponent,
    BuscarComponent,
    ProductoNewComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AngularFileUploaderModule,
    HttpClientModule,
    MomentModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
