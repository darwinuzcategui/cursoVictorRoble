import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { Global } from '../../services/global';


@Component({
  selector: 'app-producto-new',
  templateUrl: './producto-new.component.html',
  styleUrls: ['./producto-new.component.css'],
  providers: [ProductoService]
})
export class ProductoNewComponent implements OnInit {
  public producto: Producto;
  public status: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: '.jpg,.png, .gif, .jpeg ',
    maxSize: '50',
    uploadAPI:  {
      url: Global.url + '/subir-imagen',
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
  }

  ngOnInit() {}
  onSubmit() {
    this.productoService.create(this.producto).subscribe(
      response => {
        // tslint:disable-next-line: triple-equals
        console.log(response.status);
        if (response.status === 'Satisfactorio') {
          this.status = 'Satisfactorio';
          this.producto = response.producto;
          console.log(response);
          this.ruta.navigate(['/blog']);
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        console.error();
        this.status = 'error';
      }
    );
    console.log(this.producto);
  }
  imagenSubir(data) {
    let image_data = JSON.parse(data.response);
    // alert(image_data.image);
    this.producto.image = image_data.image;

  }
}
