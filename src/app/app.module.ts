import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarEditarProductoComponent } from './components/agregar-editar-producto/agregar-editar-producto.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarEditarProductoComponent,
    ListProductosComponent,
    VerProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
