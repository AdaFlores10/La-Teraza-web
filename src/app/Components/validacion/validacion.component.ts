import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario';
import { LoginService } from 'src/app/Service/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.component.html',
  styleUrls: ['./validacion.component.css']
})
export class ValidacionComponent implements OnInit {

  constructor(private router:Router,
  private loginService:LoginService) { }
  public user:Usuario = new Usuario()
  username:String
  ngOnInit(): void {
    this.InfoUser();
  }

  InfoUser(){
    this.username=localStorage.getItem("user"); 
    this.loginService.getUserbyUaser(this.username)
    .subscribe(data=>{
      this.user=data;
      if(this.user.estado==1){
        if(this.user.rol.rol=="Admin"){
          console.log("entro aqui")
          this.loginService.loginUser("Accedio")
          localStorage.setItem("user",this.username.toString());
          window.location.href="cliente";
        }else if(this.user.rol.rol=="Mesero"){
  
        }else{

        }
      }else{
        swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Tu Acceso se Encuentra Inactivo',
          footer: '<a href="">Volver al Inicio</a>'
        })
        this.router.navigate(['login'])
      }
      
      
  })
  
}
}
