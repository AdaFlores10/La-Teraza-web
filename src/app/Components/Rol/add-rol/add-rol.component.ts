import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rol } from 'src/app/Models/Rol';
import { RolService } from 'src/app/Service/rol.service';

@Component({
  selector: 'app-add-rol',
  templateUrl: './add-rol.component.html',
  styleUrls: ['./add-rol.component.css']
})
export class AddRolComponent implements OnInit {

  public rol:Rol = new Rol()

  constructor(private router:Router, private rolService:RolService) { }

  ngOnInit(): void {
  }

  
  Guardarrol(rol:Rol){
    this.rolService.createRoles(rol)
    .subscribe(data=>{
      alert("Se Agrego Con exito");
      this.router.navigate(["cliente/cliente-rol"])
    })
  }

}
