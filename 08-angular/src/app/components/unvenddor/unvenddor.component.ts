import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vendedor } from '../../models/vendedor';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-unvenddor',
  templateUrl: './unvenddor.component.html',
  styleUrls: ['./unvenddor.component.css']
})
export class UnvenddorComponent implements OnInit {
  
  @Input() vendedor:Vendedor;
  @Output() MarcarFavorito = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  seleccionar(event, vendedor){
    
    this.MarcarFavorito.emit({
    vendedor:vendedor
    });
    
   
   //console.log(vendedor);
    

  }

}
