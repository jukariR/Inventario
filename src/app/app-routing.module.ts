import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';

import { ArticuloComponent } from './pages/articulo/articulo.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ProdcutosComponent } from './pages/prodcutos/prodcutos.component';
import { ProvedoresComponent } from './pages/provedores/provedores.component';
import { AdminProvComponent } from './pages/admin-prov/admin-prov.component';

const routes: Routes = [
  {path: 'prod', component: ProdcutosComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'art/:id', component: ArticuloComponent},
  {path: 'prov', component: ProvedoresComponent},
  {path: 'admin', component: AdminProvComponent},
  {path: 'invent', component: InventarioComponent},
  {path: '**', pathMatch:'full' , redirectTo: 'prod'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
