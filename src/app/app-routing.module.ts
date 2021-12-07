import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarProductoComponent } from './components/agregar-editar-producto/agregar-editar-producto.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { VerProductoComponent } from './components/ver-producto/ver-producto.component';

const routes: Routes = [
  { path: '', component: ListProductosComponent },
  { path: 'Agregar', component: AgregarEditarProductoComponent},
  { path: 'Editar/:id', component: AgregarEditarProductoComponent},
  { path: 'Ver/:id', component: VerProductoComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
