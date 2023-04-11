import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
import { PagoService } from '../pago.service';
import { Router } from '@angular/router';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { CabeceraVenta } from 'src/app/Models/CabeceraVenta';
import { LoginService } from 'src/app/Service/login.service';
@Component({
  selector: 'app-validar',
  templateUrl: './validar.component.html',
  styleUrls: ['./validar.component.css']
})
export class ValidarComponent implements OnInit {
  cabecera: CabeceraVenta;

  constructor(private config:NgbProgressbarConfig,private router:Router,private pagoService:PagoService,
    private loginService:LoginService,private detalleService:CarritoComprasService) { 
    config.showValue=true,
    config.type="success",
    config.striped=true,
    config.animated=true
    config.height='30px';
  }

  ngOnInit(): void {
    let idUser=localStorage.getItem("iduser");
    let correo:string=localStorage.getItem("correo");
    this.getCabeceras();
    this.loginService.getCorreo(+idUser!,correo).subscribe(dasd=>{
    setTimeout(()=>(
    this.comprar(),
    window.location.href="index"
    ),5000)
        }
        )
    
  }

  getCabeceras(){
    let idUser=localStorage.getItem("iduser");
    this.detalleService.getCabecera(Number(idUser)).subscribe(cabecera=>{
      this.cabecera=cabecera
    })
  }

  comprar(){
    this.detalleService.venderCab(this.cabecera.idCabecera,this.cabecera).subscribe(dasd=>{

    })
    console.log(this.cabecera.idCabecera);
    console.log(this.cabecera);
    // this.getCabeceras();
    // this.listarDetalles();
  }  

}
