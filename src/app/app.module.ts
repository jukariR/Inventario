import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ProdcutosComponent } from './pages/prodcutos/prodcutos.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ProvedoresComponent } from './pages/provedores/provedores.component';
import { ArticuloComponent } from './pages/articulo/articulo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { AdminProvComponent } from './pages/admin-prov/admin-prov.component';
import { HistorialComponent } from './pages/historial/historial.component';



@NgModule({
  declarations: [
    AppComponent,
    ProdcutosComponent,
    InventarioComponent,
    ProvedoresComponent,
    ArticuloComponent,
    NavbarComponent,
    AgregarComponent,
    AdminProvComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
