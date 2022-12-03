import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router:Router, private productoService:ProductoService) { }

  productos:Producto[]=[];
  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
      productos=>{
        for (let p of productos){
          if(p.idProducto==1){
            this.productos.push(p);
          }else if(p.idProducto==10){
            this.productos.push(p);
          }else if(p.idProducto==17){
            this.productos.push(p);
          }
          else if(p.idProducto==23){
            this.productos.push(p);
          }else if(p.idProducto==35){
            this.productos.push(p);
          }
        }
        console.log(this.productos);
            }
    );
  }
  ObtenerInfo(producto:Producto):void{
    localStorage.setItem("codPro",producto.idProducto.toString());
    this.router.navigate(["productodetalle"]);
    console.log(producto);
  }

}
