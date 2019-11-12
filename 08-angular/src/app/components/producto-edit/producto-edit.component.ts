import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import swal from 'sweetalert';
import { ProductoService } from '../../services/producto.service';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-producto-edit',
  templateUrl: '../producto-new/producto-new.component.html',
  styleUrls: ['./producto-edit.component.css'],
  providers: [ProductoService]
})
export class ProductoEditComponent implements OnInit {
  public producto: Producto;
  public status: string;
  // tslint:disable-next-line: variable-name
  public is_edit: boolean;
  // tslint:disable-next-line: variable-name
  public pagina_titulo: string;
  public url: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png, .gif, .jpeg ',
    maxSize: '50',
    uploadAPI: {
      url: Global.url + '/subir-imagen'
    },
    theme: 'attachPin',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube la imagen del propducto...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    private productoService: ProductoService,
    private rutaActivadas: ActivatedRoute,
    private ruta: Router
  ) {
    this.producto = new Producto('', '', '', null, null);
    this.is_edit = true;
    this.pagina_titulo = 'Modificar Productos';
    this.url = Global.url;
  }

  ngOnInit() {
    this.getProducto();
  }
  onSubmit() {
    this.productoService.actulizar(this.producto._id, this.producto).subscribe(
      response => {
        console.log(response.status);
        if (response.status === 'Satisfactorio') {
          this.status = 'Satisfactorio';
          this.producto = response.producto;
          console.log('siiiii aqui');
          swal(
            'Producto Editado!!!',
            'El Producto se ha Modficado Correctamente!',
            'success'
          );
          this.ruta.navigate(['/blog/producto', this.producto._id]);
        } else {
          this.status = 'error';
          swal('Modificación Fallida !!!',
          'El Producto no se ha Modificado',
          'error');
        }
      },
      error => {
        console.log(error);
        console.error();
        this.status = 'error';
        swal('Modificación Fallida !!!',
        'El Producto no se ha Modificado',
        'error');
      }
    );
    // console.log(this.producto);
  }

  imagenSubir(data) {
    // tslint:disable-next-line: variable-name
    const image_data = JSON.parse(data.response);
    alert(image_data.image);
    this.producto.image = image_data.image;
  }

  getProducto() {
    this.rutaActivadas.params.subscribe(params => {
      const id = params.id;
      this.productoService.getUnproducto(id).subscribe(
        response => {
          if (response.producto) {
            this.producto = response.producto;
            // console.log(response);
          } else {
            this.ruta.navigate(['/home']);
          }
        },
        error => {
          console.log(error);
          swal('Modificación Fallida !!!',
          'El Producto no se ha Modificado',
          'error');
          this.ruta.navigate(['/home']);
        }
      );
    });
  }
}
