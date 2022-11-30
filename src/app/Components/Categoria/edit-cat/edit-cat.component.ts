import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/Categoria';
import { CategoriaService } from 'src/app/Service/categoria.service';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {

  public categoria:Categoria = new Categoria()
  constructor(private router:Router, private categoriaService:CategoriaService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let idCategoria=localStorage.getItem("idCategoria"); 
    this.categoriaService.getCategoriasId(+idCategoria!)
    .subscribe(data=>{
      this.categoria=data;
    })
  }
  
  ActualizarCategoria(categoria:Categoria){
    this.categoriaService.updateCategorias(categoria)
    .subscribe(data=>{
      this.categoria=data;
      alert("Se actualizó con éxito");
      this.router.navigate(["cliente/cliente-categoria"])
    })
  }

}
