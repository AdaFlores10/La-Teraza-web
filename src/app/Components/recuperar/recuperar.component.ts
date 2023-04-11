import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario';
import { LoginService } from 'src/app/Service/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  correo:string="";
  
  public user:Usuario = new Usuario()
  
  constructor(private router:Router,private loginService:LoginService ) { }

  ngOnInit(): void {
  }

  Recuperar(correo:string){ 
    this.loginService.getCorreoRecuperar(correo).subscribe(
      data=>{ 
        if (data == "1") {
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email no Encontradoo',
            footer: '<a href="">Volver al Inicio</a>'
          })
        }
        else{
            localStorage.setItem("correo",correo);
              localStorage.setItem("codigo",data);
              swal.fire({
                icon: 'success',
                title: `Codigo enviado con Exito`,
              })
              this.router.navigate(["/codigo"]);
        }
      }
    )
  }

}
