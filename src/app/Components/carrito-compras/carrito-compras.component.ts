import { Component, Inject, OnInit } from '@angular/core';
//import { DOCUMENT } from '@angular/platform-browser';
import { DetalleVenta } from 'src/app/Models/DetalleVenta';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  clase=0
  detalleVentas:DetalleVenta[]
  constructor(private detalleService:CarritoComprasService) {

   }

  ngOnInit(): void {
    this.detalleService.listarCabeceras()
    .subscribe(data=>{
        this.detalleVentas=data;
        console.log(this.detalleVentas)
      }
    )
  }

  editarClase(){
    if (this.clase==0){
      this.clase=1
    }else{
      this.clase=0
    }
    console.log("salida")
    console.log(this.clase)
  }

  pintar(item:DetalleVenta){
    console.log(item)
  }


}
