import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public nombre: string;
  public terminoBusquedad: string;

  constructor(private ruta: Router, private rutaActivas: ActivatedRoute) {}

  ngOnInit() {}
  irBuscar() {
    this.ruta.navigate(['/buscar', this.terminoBusquedad]);
    // alert(this.terminoBusquedad);
  }
}
