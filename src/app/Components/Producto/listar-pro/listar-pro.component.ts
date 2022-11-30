import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-listar-pro',
  templateUrl: './listar-pro.component.html',
  styleUrls: ['./listar-pro.component.css']
})
export class ListarProComponent implements OnInit {

  productos:Producto[]=[];
  productosfiltro:Producto[]=[];
  constructor(private rutaActiva: ActivatedRoute,private router:Router, private productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      productos=>{
        this.productos=productos;

        console.log(productos);
      }
    );
  }
  Delete(producto:Producto){
    this.productoService.deleteProducto(producto)
    .subscribe(data=>{
      this.productos = this.productos.filter(c=>c.idProducto!==producto.idProducto);
      alert("Producto Eliminada con Exito")
    })
  }
  Editar(producto:Producto):void{
    localStorage.setItem("idProducto",producto.idProducto.toString());
    this.router.navigate(["cliente/cliente-editproducto"]);
  }

  // avisar(){
  //   for( let pro of this.productos){
  //     if(pro.categoria.idCategoria!=3){
  //       this.productosfiltro.push(pro);
  //     }
  //   }
  // }

}
