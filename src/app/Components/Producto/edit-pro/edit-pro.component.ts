import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/Categoria';
import { Producto } from 'src/app/Models/Producto';
import { CategoriaService } from 'src/app/Service/categoria.service';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  public producto:Producto = new Producto()
  constructor(private router:Router, private productoService:ProductoService,private categoriaService:CategoriaService ) { }
  categorias: Categoria[]=[];
  ngOnInit(): void {
    
    this.categoriaService.getCategorias().subscribe(
      categorias=>{
      this.categorias=categorias;
      }
    );
    this.Editar();
  }

  Editar(){
    let idProducto=localStorage.getItem("idProducto"); 
    this.productoService.getProductoId(+idProducto!)
    .subscribe(data=>{
      this.producto=data;
    })
  }
  
  ActualizarProducto(producto:Producto){
    this.productoService.updateProducto(producto)
    .subscribe(data=>{
      this.producto=data;
      alert("Se actualizó con éxito");
      this.router.navigate(["cliente/cliente-producto"])
    })
  }

}
