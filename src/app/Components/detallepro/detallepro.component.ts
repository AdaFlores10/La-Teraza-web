import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { LoginService } from 'src/app/Service/login.service';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-detallepro',
  templateUrl: './detallepro.component.html',
  styleUrls: ['./detallepro.component.css']
})
export class DetalleproComponent implements OnInit {
  producto:Producto = new Producto();
  constructor(private router:Router, private productoService:ProductoService, private loginService:LoginService) { }

  ngOnInit(): void {
    this.Editar()
  }
  Editar(){
    let codPro=localStorage.getItem("codPro"); 
    this.productoService.getProductoId(+codPro!)
    .subscribe(data=>{
      this.producto=data;
    })
  }

  ValidarUser(){
    if(this.loginService.isLoggedIn()){
        console.log("Entra");
    }else{
      console.log("Ingresa o Registrate")
    }
    
  }

}
