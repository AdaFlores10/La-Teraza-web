import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { LoginService } from 'src/app/Service/login.service';
import { ProductoService } from 'src/app/Service/producto.service';
import { Location } from '@angular/common';
import swal from 'sweetalert2';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
import { CabeceraVenta } from 'src/app/Models/CabeceraVenta';
import { DetalleVenta } from 'src/app/Models/DetalleVenta';


@Component({
  selector: 'app-detallepro',
  templateUrl: './detallepro.component.html',
  styleUrls: ['./detallepro.component.css']
})
export class DetalleproComponent implements OnInit {
  clase = false;
  detalle:DetalleVenta=new DetalleVenta();
  producto:Producto = new Producto();
  cabecera:CabeceraVenta= new CabeceraVenta();



  constructor(private router:Router, private productoService:ProductoService, private loginService:LoginService,
    private location:Location, private carrito:CarritoComprasService) { }

  ngOnInit(): void {
    let iduser=localStorage.getItem("iduser"); 
    console.log(iduser);
    this.carrito.getCabeU(+iduser!).subscribe(data=>{
      this.cabecera=data;
      console.log(this.cabecera.tipoCabecera+this.cabecera.idCabecera)
    })
    this.Editar()
  }

  Editar(){
    let codPro=localStorage.getItem("codPro"); 
    this.productoService.getProductoId(+codPro!)
    .subscribe(data=>{
      this.producto=data;
    })
  }

  AgregarAlCarrito(detalle:DetalleVenta){
    if(this.loginService.isLoggedIn()){
      console.log("Primera Validacion")
      if(this.detalle.cantidad==undefined){
            console.log("Segunda Validacion")
          }else{
            this.carrito.listarDetalles(this.cabecera.usuario.idUsuario).subscribe(data=>{
              let encontro=0;
              for(let de of data){
                console.log(de);
                  if(de.producto.idProducto==this.producto.idProducto){
                    encontro=1;
                    console.log("Encontro Producto Igual")
                    de.cantidad= this.detalle.cantidad+de.cantidad;
                    console.log(de.cantidad);
                    this.carrito.actualizarCant(de.idDetalleVenta,de).subscribe(detalleup=>{
                    console.log("Detalle up")
                    })
                    console.log("Rompe");
                    break;
                  }
              }
              if(encontro==0){
                    this.detalle.cabecera=this.cabecera;
                    this.detalle.producto=this.producto;
                    this.detalle.precio=this.producto.precio;
                    this.detalle.estado=1;
                    this.carrito.createDetalle(detalle)
                      .subscribe(data=>{
                      alert("Se Agrego Con exito");
                      })
              }
              })

          }
      
    }else{
      swal.fire({
        icon: 'info',
        title: 'Ups...',
        text: 'Logueate o Resgistrate para Comenzar',
      })
      this.router.navigate(["/login"])
      console.log("Ingresa o Registrate")
    }

    
    


        
    
    
  }

  save(){

  }

}
