<app-slider [nombre]="'Vendedor'" [size]="'small'"></app-slider>

<!-- Contenido de mi progragma -->
<div class="center">
  <section id="content">
    <h1 class="subheader">Vendedor</h1>

    <div id="marcadoFavorito">
      <h3 class="subheader">
        Vendedor Selecionado
      </h3>
      <!-- {{ marcando.codigo }}{{ marcando.nombre }} 
    </div> -->

    <!--  <p>{{ titulo }}</p>
    <button (click)="cambiarTitulo()">Pulsame</button>

    <hr />
    <h2>Mostrar Primer Vendedor del Objeto</h2>
    {{ vendedores[0].codigo }} {{ vendedores[0].nombre }}
    <hr />
    <h2>Numero de Vendedor</h2>
    {{ vendedores.length }}
    <hr />
    <div *ngIf="vendedores.length <= 3">
      hay Que buscar Vendores tenemos pocos
    </div>
    <div *ngIf="vendedores.length > 3">
      hay Muchos vendores
    </div>
    <hr />
    <h2 class="subheader">Listados de Vendedores</h2> -->
    <div id="articulos" *ngIf="vendedores">
      <div *ngFor="let vendedor of vendedores; let i = index">
        <app-unvenddor [vendedor]="vendedor"
        ></app-unvenddor>
      </div>
    </div>
  </section>
  <app-sidebar></app-sidebar>
</div>
