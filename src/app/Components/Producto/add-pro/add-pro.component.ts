import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/Categoria';
import { Producto } from 'src/app/Models/Producto';
import { CategoriaService } from 'src/app/Service/categoria.service';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-add-pro',
  templateUrl: './add-pro.component.html',
  styleUrls: ['./add-pro.component.css']
})
export class AddProComponent implements OnInit {

  public producto:Producto = new Producto()

  constructor(private router:Router, private productoService:ProductoService, private categoriaService:CategoriaService ) { }

  categorias: Categoria[]=[];
  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      categorias=>{
      this.categorias=categorias;
      }
    );
  }
  GuardarProducto(producto:Producto){
    this.productoService.createProducto(producto)
    .subscribe(data=>{
      alert("Se Agrego Con exito");
      this.router.navigate(["cliente/cliente-producto"])
    })
    
  }


}
