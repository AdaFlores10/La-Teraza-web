import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { Usuario } from 'src/app/Models/Usuario';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
@Component({
  selector: 'app-cliente-perfil',
  templateUrl: './cliente-perfil.component.html',
  styleUrls: ['./cliente-perfil.component.css']
})
export class ClientePerfilComponent implements OnInit {

  constructor(private modal:NgbModal,  private loginService:LoginService,
    private router:Router) { }

  public user:Usuario = new Usuario();
  public usuario:Usuario = new Usuario();
  username:string;
  ngOnInit(): void {
    this.username=localStorage.getItem("user"); 
    this.loginService.getUserbyUaser(this.username)
    .subscribe(data=>{
      this.user=data;})
  }

  openCentrado(contenido){
    this.modal.open(contenido,{centered:true});
  }

  UpdateUser(usuario:Usuario){
    this.loginService.updateUser(usuario).subscribe(
      data=>{
        console.log(data);
        swal.fire(
          'Operación Exitosa',
          'Actualización Realizada',
          'success'
        )
      }
    );
    
  }




}
