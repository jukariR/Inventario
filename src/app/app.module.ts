import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdcutosComponent } from './pages/prodcutos/prodcutos.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ProvedoresComponent } from './pages/provedores/provedores.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    ProdcutosComponent,
    InventarioComponent,
    ProvedoresComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
