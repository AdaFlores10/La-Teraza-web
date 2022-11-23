import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

const routes:Routes =[
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:IndexComponent},
  {path:'login',component:LoginComponent},
  {path:'validation',component:ValidacionComponent},
  {path:'menuadmin',component:MenuAdminComponent,canActivate:[CanActivateGuard]},
  {path:'cliente',component:ClienteComponent},
  {path:'carrito-compras',component:CarritoComprasComponent}
]

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TopbarComponent } from './Components/topbar/topbar.component';
import { IndexComponent } from './Components/index/index.component';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { LoginComponent } from './Components/login/login.component';
import { ValidacionComponent } from './Components/validacion/validacion.component';
import { MenuAdminComponent } from './Components/menu-admin/menu-admin.component';
import { CanActivateGuard } from './Service/can-activate.guard';
import { CarritoComprasComponent } from './Components/carrito-compras/carrito-compras.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    IndexComponent,
    ClienteComponent,
    LoginComponent,
    ValidacionComponent,
    MenuAdminComponent,
    CarritoComprasComponent,

    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
