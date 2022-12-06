import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Models/Usuario';
import { CargajsService } from 'src/app/Service/cargajs.service';
import { LoginService } from 'src/app/Service/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-cliente-inicio',
  templateUrl: './cliente-inicio.component.html',
  styleUrls: ['./cliente-inicio.component.css']
})
export class ClienteInicioComponent implements OnInit {
  public user:Usuario= new Usuario();
  username="";
  constructor(private loginService:LoginService) { 
    
  }

  ngOnInit(): void {
    this.username=localStorage.getItem("user"); 
    this.loginService.getUserbyUaser(this.username)
    .subscribe(data=>{
      this.user=data;})

  }

}
