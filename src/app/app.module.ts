import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

const routes:Routes =[
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:IndexComponent}
]

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TopbarComponent } from './Components/topbar/topbar.component';
import { IndexComponent } from './Components/index/index.component';
import { ClienteComponent } from './Components/cliente/cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopbarComponent,
    IndexComponent,
    ClienteComponent,
    

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
