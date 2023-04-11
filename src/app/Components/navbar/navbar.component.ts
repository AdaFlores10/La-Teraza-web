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
    user.estado=1;
    user.rol=this.roles[0];
    var nombre:String = user.nombre;
    var apellido:String = user.apellido;
    var usuario:String = user.usuario;
    var contra:String = user.contrasena;
    var direccion:String = user.direccion;
    var telefono:String = user.telefono;
    var dni:String = user.dni;
    console.log(nombre)
    if(nombre==undefined || nombre.trim()==""){
      swal.fire(
        'Campo Nombre',
        'Asegurece de rellenar todos los campos',
        'info'
      )
    }else if(apellido==undefined || apellido.trim()=="") {
      swal.fire(
        'Campo Apellido',
        'Asegurece de rellenar todos los campos correctamente',
        'info'
      )
    }else if(usuario==undefined || usuario.trim()=="") {
      swal.fire(
        'Campo Usuario',
        'Asegurece de rellenar todos los campos correctamente',
        'info'
      )
    }
    else if(contra==undefined || contra.trim()=="") {
      swal.fire(
        'Campo Contraseña',
        'Asegurece de rellenar todos los campos correctamente',
        'info'
      )
    }
    else if(user.sexo==undefined ) {
      swal.fire(
        'Campo Sexo',
        'Asegurece de rellenar todos los campos correctamente',
        'info'
      )
    }
    else if(direccion==undefined || direccion.trim()=="") {
      swal.fire(
        'Campo Direccion',
        'Asegurece de rellenar todos los campos correctamente',
        'info'
      )
    }
    else if(telefono==undefined ) {
      swal.fire(
        'Campo Telefono',
        'Asegurece de rellenar todos los campos correctamente',
        'info'
      )
    }
    else if(dni==undefined || dni.trim()==""  || dni.length!=8 ) {
      swal.fire(
        'Campo DNI',
        'Asegurece de rellenar todos los campos correctamente',
        'info'
      )
    }
    else{
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
  }

  logoutUser(){
    localStorage.removeItem("idUser");
    this.loginService.logout();
    window.location.href="/index";
  }

}
