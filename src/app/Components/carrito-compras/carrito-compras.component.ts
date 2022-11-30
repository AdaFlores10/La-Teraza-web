// import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CabeceraVenta } from 'src/app/Models/CabeceraVenta';
//import { DOCUMENT } from '@angular/platform-browser';
import { DetalleVenta } from 'src/app/Models/DetalleVenta';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  conf: boolean=true;
  valor: string="EDITAR";


  cabecera: CabeceraVenta;

  clase=0
  detalleVentas:DetalleVenta[]

  constructor(private detalleService:CarritoComprasService) {
   }

  ngOnInit(): void {
    this.listarDetalles();
    this.getCabeceras();
  }

  listarDetalles(){
    this.detalleService.listarDetalles(1)
    .subscribe(data=>{
        this.detalleVentas=data;
      }
    )
  }
  //localStorage
  procesar(item : DetalleVenta){
    if(this.conf==true){
      this.conf=false;
      this.valor="GUARDAR"
    }else{
      this.conf=true;
      this.detalleService.actualizarCant(item.idDetalleVenta,item).subscribe(data=>{
        //this.detalleVentas=this.detalleVentas.filter(r=>r.idDetalleVenta!==item.idDetalleVenta);
        this.listarDetalles();
        this.getCabeceras();
      })
    }
    
  }

  eliminar(id:number){
    this.detalleService.eliminarCarrito(id).subscribe(data=>{
      this.listarDetalles();
      this.getCabeceras();
    })
  }

  getCabeceras(){
    this.detalleService.getCabecera(1).subscribe(cabecera=>{
      this.cabecera=cabecera
    })
  }

}
