import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Models/Usuario';
import { LoginService } from 'src/app/Service/login.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-recuperarcodigo',
  templateUrl: './recuperarcodigo.component.html',
  styleUrls: ['./recuperarcodigo.component.css']
})
export class RecuperarcodigoComponent implements OnInit {


  codigo:string="";
  pass:string="";
  public user:Usuario = new Usuario()
  codigoinput:string="";
  constructor(private router:Router,private loginService:LoginService ) { }
  
  ngOnInit(): void {
    this.codigo=localStorage.getItem("codigo"); 
    let correo=localStorage.getItem("correo");

    this.loginService.getUserbyCorreo(correo).subscribe(
      data2=>{ 
        this.user=data2;
        console.log(this.user)
        localStorage.setItem("idusuario2",this.user.idUsuario.toString());
      
        })

  }

  Validar(cod:string){ 
    if(this.codigo==cod){ 
      swal.fire({
        title: 'Ingrese nueva Contraseña',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          if(login==undefined){ 
            swal.showValidationMessage(
              `Request failed: Rellene el Campo`
            )
          }else if(login==""){ 
            swal.showValidationMessage(
              `Request failed: Rellene el Campo`
            )
          }
          
        },
        allowOutsideClick: () => !swal.isLoading()
      }).then((result:any) => {
        if (result.isConfirmed) {
          this.pass=(result.value);
          this.loginService.updateUserpassword(this.user,this.pass).subscribe(dasd=>{
            swal.fire({
              icon: 'success',
              title: `Contraseña actualizada con Exito`,
            })
            this.router.navigate(["/index"]);
          }
          )
          
        }
      })
      
    }else{ 
    
    swal.fire({
      icon: 'error',
      title: `Codigo incorrecto`,
    })
  }
  }
  

}
