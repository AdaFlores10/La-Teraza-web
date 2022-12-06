import { Component, OnInit } from '@angular/core';
import { CabeceraVenta } from 'src/app/Models/CabeceraVenta';
import { DetalleVenta } from 'src/app/Models/DetalleVenta';
import { Usuario } from 'src/app/Models/Usuario';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';

@Component({
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.component.html',
  styleUrls: ['./pedidos-admin.component.css']
})
export class PedidosAdminComponent implements OnInit {

  public user:Usuario = new Usuario();
  cabeceras:CabeceraVenta[]=[];
  detalles:DetalleVenta[]=[];
  constructor( private carritoService:CarritoComprasService) { }

  ngOnInit(): void {
    this.carritoService.listarCabTodos().subscribe(
      cabeceras=>{
        this.cabeceras=cabeceras;
        console.log(cabeceras);
      }
    );
  }

  VerDetalles(CabeceraVenta:CabeceraVenta,user:Usuario){
    this.user=user;
    this.carritoService.listarDetUser(CabeceraVenta.idCabecera).subscribe(
      detalles=>{
        this.detalles=detalles;
        console.log(detalles);
      }
    );
  }

}
