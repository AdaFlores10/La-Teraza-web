import { NgModule,Sanitizer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule,Routes } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
// ngBootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';




const routes:Routes =[
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:IndexComponent},
  {path:'login',component:LoginComponent},
  {path:'recuperar',component:RecuperarComponent},
  {path:'codigo',component:RecuperarcodigoComponent},
  {path:'validation',component:ValidacionComponent},
  {path:'menuadmin',component:MenuAdminComponent,canActivate:[CanActivateGuard]},
  {path:'cliente',component:ClienteComponent,
  children:[
    {path:'cliente-inicio',component:ClienteInicioComponent},
    {path:'cliente-pedidos',component:PedidosComponent},
    //TODO PRODUCTO
    {path:'cliente-producto',component:ListarProComponent},
    {path:'cliente-addproducto',component:AddProComponent},
    {path:'cliente-editproducto',component:EditProComponent},
    //TODO CATEGORIA
    {path:'cliente-categoria',component:ListarCatComponent},
    {path:'cliente-addcategoria',component:AddCatComponent},
    {path:'cliente-editcategoria',component:EditCatComponent},
    //TODO ROL
    {path:'cliente-rol',component:ListarRolComponent},
    {path:'cliente-addrol',component:AddRolComponent},
    {path:'cliente-editrol',component:EditRolComponent},
    //TODO TIPO DE PAGO
    {path:'cliente-tipopago',component:ListarTdpComponent},
    {path:'cliente-addtdp',component:AddTdpComponent},
    {path:'cliente-edittdp',component:EditTdpComponent},
    //TODO USER
    {path:'cliente-usuarios',component:ListarUserComponent},
    {path:'cliente-usuariosoff',component:ListarUseroffComponent},
    {path:'cliente-adduser',component:AddUserComponent},
    //TODO USER
    {path:'cliente-pedidosadmin',component:PedidosAdminComponent},
    {path:'cliente-perfil',component:ClientePerfilComponent},   
    {path:'cliente-dashproducto',component:ProductoComponent},
    {path:'cliente-dashventas',component:VentasComponent},
  ]},
  {path:'carrito-compras',component:CarritoComprasComponent},
  {path:'hamburguesas',component:HamburguesaComponent},
  {path:'productodetalle',component:DetalleproComponent},
  {path:'pasarela',component:PaypalComponent},
  {path:'envio',component:EnvioComponent},
  {path:'pagos',component:PagosComponent},
  {path:'validar',component:ValidarComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'politicas',component:PoliticasPComponent},
  {path:'**',redirectTo:'index',pathMatch:'full'}

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

import { HamburguesaComponent } from './Components/hamburguesa/hamburguesa.component';
import { DetalleproComponent } from './Components/detallepro/detallepro.component';

import { FooterComponent } from './Components/footer/footer.component';
import { ClienteInicioComponent } from './Components/cliente-inicio/cliente-inicio.component';
import { ListarProComponent } from './Components/Producto/listar-pro/listar-pro.component';
import { AddProComponent } from './Components/Producto/add-pro/add-pro.component';
import { EditProComponent } from './Components/Producto/edit-pro/edit-pro.component';
import { ListarCatComponent } from './Components/Categoria/listar-cat/listar-cat.component';
import { AddCatComponent } from './Components/Categoria/add-cat/add-cat.component';
import { EditCatComponent } from './Components/Categoria/edit-cat/edit-cat.component';
import { ListarRolComponent } from './Components/Rol/listar-rol/listar-rol.component';
import { AddRolComponent } from './Components/Rol/add-rol/add-rol.component';
import { EditRolComponent } from './Components/Rol/edit-rol/edit-rol.component';
import { ListarTdpComponent } from './Components/tipopago/listar-tdp/listar-tdp.component';
import { AddTdpComponent } from './Components/tipopago/add-tdp/add-tdp.component';
import { EditTdpComponent } from './Components/tipopago/edit-tdp/edit-tdp.component';
import { PedidosComponent } from './Components/pedidos/pedidos.component';
import { ListarUserComponent } from './Components/Usuario/listar-user/listar-user.component';
import { AddUserComponent } from './Components/Usuario/add-user/add-user.component';
import { PedidosAdminComponent } from './Components/pedidos-admin/pedidos-admin.component';
import { PaypalComponent } from './Components/paypal/paypal.component';
import { InterceptorService } from './Components/paypal/interceptor.service';
import { EnvioComponent } from './Components/paypal/envio/envio.component';
import { PagosComponent } from './Components/paypal/pagos/pagos.component';
import { ValidarComponent } from './Components/paypal/validar/validar.component';
import { ClientePerfilComponent } from './Components/cliente-perfil/cliente-perfil.component';
import { NosotrosComponent } from './Components/nosotros/nosotros.component';
import { PoliticasPComponent } from './Components/politicas-p/politicas-p.component';
import { ListarUseroffComponent } from './Components/Usuario/listar-useroff/listar-useroff.component';
import { RecuperarComponent } from './Components/recuperar/recuperar.component';
import { RecuperarcodigoComponent } from './Components/recuperarcodigo/recuperarcodigo.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ProductoComponent } from './Components/Dashboard/producto/producto.component';
import { VentasComponent } from './Components/Dashboard/ventas/ventas.component';





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
    HamburguesaComponent,
    DetalleproComponent,
    FooterComponent,
    ClienteInicioComponent,
    ListarProComponent,
    AddProComponent,
    EditProComponent,
    ListarCatComponent,
    AddCatComponent,
    EditCatComponent,
    ListarRolComponent,
    AddRolComponent,
    EditRolComponent,
    ListarTdpComponent,
    AddTdpComponent,
    EditTdpComponent,
    PedidosComponent,
    ListarUserComponent,
    AddUserComponent,
    PedidosAdminComponent,
    PaypalComponent,
    EnvioComponent,
    PagosComponent,
    ValidarComponent,
    ClientePerfilComponent,
    NosotrosComponent,
    PoliticasPComponent,
    ListarUseroffComponent,
    RecuperarComponent,
    RecuperarcodigoComponent,
    ProductoComponent,
    VentasComponent,

    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  providers: [
  {
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
