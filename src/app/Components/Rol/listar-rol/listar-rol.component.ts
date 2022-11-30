import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/Models/Rol';
import { RolService } from 'src/app/Service/rol.service';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.css']
})
export class ListarRolComponent implements OnInit {

  roles: Rol[]=[];
  constructor(private router:Router,private rolService:RolService) { }

  ngOnInit(): void {
    this.rolService.getRoles().subscribe(
      roles=>{
      this.roles=roles;
      }
    );
  }

  Delete(rol:Rol){
    this.rolService.deleteRol(rol)
    .subscribe(data=>{
      this.roles = this.roles.filter(r=>r.idRol!==rol.idRol);
      alert("Rol Eliminada con Exito")
    })
  }
  Editar(rol:Rol):void{
    localStorage.setItem("idRol",rol.idRol.toString());
    this.router.navigate(["cliente/cliente-editrol"]);
  }

}
