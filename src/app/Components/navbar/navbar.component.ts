import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Rol } from 'src/app/Models/Rol';
import { Usuario } from 'src/app/Models/Usuario';
import { RolService } from 'src/app/Service/rol.service';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  roles: Rol[]=[];
  public loggedIn = false;
  public usuario:Usuario = new Usuario()

  constructor(private router:Router,
    private loginService:LoginService,
    private location:Location,
    private rolService: RolService
    ) { }

  clase=true;

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
    if (this.location.path()=="/carrito-compras"){
      this.clase=false;
      console.log("asd")
    }

  }

  logoutUser(){
    this.loginService.logout();
    location.reload();
  }

}
