import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/Models/Rol';
import { RolService } from 'src/app/Service/rol.service';

@Component({
  selector: 'app-edit-rol',
  templateUrl: './edit-rol.component.html',
  styleUrls: ['./edit-rol.component.css']
})
export class EditRolComponent implements OnInit {

  public rol:Rol = new Rol()
  constructor(private router:Router, private rolService:RolService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let idRol=localStorage.getItem("idRol"); 
    this.rolService.getRolesId(+idRol!)
    .subscribe(data=>{
      this.rol=data;
    })
  }
  
  ActualizarRol(rol:Rol){
    this.rolService.updateRoles(rol)
    .subscribe(data=>{
      this.rol=data;
      alert("Se actualizó con éxito");
      this.router.navigate(["cliente/cliente-rol"])
    })
  }

}
