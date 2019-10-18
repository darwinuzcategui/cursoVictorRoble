import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public nombre: string;
  public apellidos: string;

  constructor(private rutaActivad: ActivatedRoute, private rutas: Router) {}

  ngOnInit() {
    this.rutaActivad.params.subscribe((params: Params) => {
      // No devuelve los parametros con el observable
      // console.log(params);
      this.nombre = params.nombre;
      this.apellidos = params.apellidos;
    });
  }

  redirecion() {
    // alert('Metodo en Contruccion rediricion');
    this.rutas.navigate(['/pagina-de-prueba','Darwin','Uzcategui']);
  }
}
