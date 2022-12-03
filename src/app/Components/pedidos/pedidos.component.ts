import { Component, OnInit } from '@angular/core';
import { CabeceraVenta } from 'src/app/Models/CabeceraVenta';
import { DetalleVenta } from 'src/app/Models/DetalleVenta';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  cabeceras:CabeceraVenta[]=[];
  detalles:DetalleVenta[]=[];
  constructor( private carritoService:CarritoComprasService) { }

  ngOnInit(): void {
    let idUser=localStorage.getItem("iduser");
    this.carritoService.listarCabUser(+idUser!).subscribe(
      cabeceras=>{
        this.cabeceras=cabeceras;
        console.log(cabeceras);
      }
    );
  }

  VerDetalles(CabeceraVenta:CabeceraVenta){
    this.carritoService.listarDetUser(CabeceraVenta.idCabecera).subscribe(
      detalles=>{
        this.detalles=detalles;
        console.log(detalles);
      }
    );
  }

}
