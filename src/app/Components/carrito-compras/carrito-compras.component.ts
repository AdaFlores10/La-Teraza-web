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

  detalleVentas:DetalleVenta[]
  constructor(private detalleService:CarritoComprasService) {

   }

  ngOnInit(): void {
    this.detalleService.listarCabeceras()
    .subscribe(data=>{
        this.detalleVentas=data;
        // console.log("Detalle")
        // console.log(data)
        console.log("Detalle")
        console.log(this.detalleVentas)
      }
    )
  }
}
