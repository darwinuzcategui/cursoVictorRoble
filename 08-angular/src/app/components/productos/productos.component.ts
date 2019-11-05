import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../models/producto';
import { Global } from '../../services/global';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  public url: string;
  @Input() productos: Producto[];

  constructor() {
    this.url = Global.url;
  }

  ngOnInit() {}
}
