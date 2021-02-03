import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ProdcutosComponent } from './pages/prodcutos/prodcutos.component';
import { ProvedoresComponent } from './pages/provedores/provedores.component';

const routes: Routes = [
  {path: 'prod', component: ProdcutosComponent},
  {path: 'art/:id', component: ProdcutosComponent},
  {path: 'prov', component: ProvedoresComponent},
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