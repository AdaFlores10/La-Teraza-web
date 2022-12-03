import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  admin:boolean=false;
  public user:Usuario= new Usuario();
  username="";
  constructor(private loginService:LoginService) { }
  clase=false;
  rol:number;
  //rol =1 ADMIN
  //rol =2 MESERO
  //rol = 3 Cliente

  ngOnInit(): void {
    this.clase=true;
    this.admin=this.loginService.isLoggedIn();
    this.ObtenerRol();
    }
    ObtenerRol(){
      this.username=localStorage.getItem("user"); 
    this.loginService.getUserbyUaser(this.username)
    .subscribe(data=>{
      this.user=data;
      this.rol=this.user.rol.idRol;
    })
      
    }

}
