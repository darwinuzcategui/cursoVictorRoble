// importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes las cual quiero que sean pagina esclusiva.
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { UnproductoComponent } from './components/unproducto/unproducto.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { VendedorComponent } from './components/vendedor/vendedor.component';
import { ErrorComponent } from './components/error/error.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { ProductoNewComponent } from './components/producto-new/producto-new.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';

// array de rutas
const rutas: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/producto/:id', component: UnproductoComponent },
  { path: 'blog/incluir', component: ProductoNewComponent },
  { path: 'blog/editar/:id', component: ProductoEditComponent },
  { path: 'buscar/:termino', component: BuscarComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'vendedor', component: VendedorComponent },
  { path: 'pagina-de-prueba', component: PaginaComponent },
  { path: 'pagina-de-prueba/:nombre/:apellidos', component: PaginaComponent },
  { path: '**', component: ErrorComponent }
];

// Exportar el modulo de rutas appRoutingProviders, routing
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);
