import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'nor;
import { Producto } from 'src/app/interfaces/Producto';

@Component({
  selector: 'app-agregar-editar-producto',
  templateUrl: './agregar-editar-producto.component.html',
  styleUrls: ['./agregar-editar-producto.component.css']
})
export class AgregarEditarProductoComponent implements OnInit {

  agregarProducto: FormGroup;

  constructor(private fb: FormBuilder) {
    this.agregarProducto = this.fb.group({
      nombreProducto: ['', Validators.required],
      marca: ['', Validators.required],
      categoria: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  agregar() {
    console.log(this.agregarProducto);

    const producto: Producto = {
      nombreProducto: this.agregarProducto.get('nombreProducto')?.value,
      marca: this.agregarProducto.get('marca')?.value,
      categoria: this.agregarProducto.get('categoria')?.value,
      fechaCreacion: new Date()
    }

    console.log(producto);
  }

}
