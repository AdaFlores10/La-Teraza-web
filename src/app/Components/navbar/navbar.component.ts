import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Rol } from 'src/app/Models/Rol';
import { Usuario } from 'src/app/Models/Usuario';
import { RolService } from 'src/app/Service/rol.service';
import { CabeceraVenta } from 'src/app/Models/CabeceraVenta';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
import swal from 'sweetalert2';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  roles: Rol[]=[];
  public loggedIn = false;
  public usuario:Usuario = new Usuario()
  public cabecera:CabeceraVenta = new CabeceraVenta()

  constructor(private router:Router,
    private loginService:LoginService,
    private location:Location,
    private rolService: RolService,
    private carrito:CarritoComprasService
    ) { }

  clase=true;
  clase2=false;


  ngOnInit(): void {
    
    this.rolService.getRoles().subscribe(
      roles=>{
        for( let r of roles){
          if((r.idRol==3)){
            this.roles.push(r);
          }
        }
      
      
      }
    );
    
    this.loggedIn=this.loginService.isLoggedIn();
    
    console.log(this.location.path())
    if (this.location.path()=="/carrito-compras"){
      this.clase=false;
      console.log("asd")
    }else if (this.location.path()=="/productodetalle"){
      this.clase=true;
      console.log("asd")
    }else if (this.location.path()=="/cliente"){
      this.clase=false;
      console.log("asd")
    }
    else if (this.location.path()=="/cliente/cliente-inicio"){
      this.clase=false;
      console.log("cliente inicio")
    }

  }

  Registrar(user:Usuario){

    this.loginService.createUser(user)
    .subscribe(data=>{
      console.log(data.idUsuario)
      this.carrito.addCabCarrito(data.idUsuario).subscribe(d=>{
        console.log(d.idCabecera);
      })
      swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Gracias por la Preferencia',
        footer: '<a href="/index">Ir al Inicio</a>'
      })
      this.router.navigate(["/login"])
    })
  }

  logoutUser(){
    localStorage.removeItem("idUser");
    this.loginService.logout();
    window.location.href="/index";
  }

}
