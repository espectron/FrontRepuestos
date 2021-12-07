import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/Producto';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  listproductos: Producto[] = [
    { nombreProducto: 'Los Mundos', marca: 'Mar', fechaCreacion: new Date(), categoria: 'Hola Mundo'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
