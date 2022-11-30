import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/Categoria';
import { CategoriaService } from 'src/app/Service/categoria.service';

@Component({
  selector: 'app-listar-cat',
  templateUrl: './listar-cat.component.html',
  styleUrls: ['./listar-cat.component.css']
})
export class ListarCatComponent implements OnInit {

  categorias: Categoria[]=[];
  constructor(private router:Router,private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.categoriaService.getCategorias().subscribe(
      categorias=>{
      this.categorias=categorias;
      }
    );
  }

  Delete(categoria:Categoria){
    this.categoriaService.deleteCategoria(categoria)
    .subscribe(data=>{
      this.categorias = this.categorias.filter(c=>c.idCategoria!==categoria.idCategoria);
      alert("Categoria Eliminada con Exito")
    })
  }
  Editar(categoria:Categoria):void{
    localStorage.setItem("idCategoria",categoria.idCategoria.toString());
    this.router.navigate(["cliente/cliente-editcategoria"]);
  }

}
