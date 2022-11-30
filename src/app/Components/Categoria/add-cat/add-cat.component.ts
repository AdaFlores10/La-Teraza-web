import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Models/Categoria';
import { CategoriaService } from 'src/app/Service/categoria.service';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {

  public categoria:Categoria = new Categoria()

  constructor(private router:Router, private categoriaService:CategoriaService) { }

  ngOnInit(): void {
  }

  
  GuardarCategoria(categoria:Categoria){
    this.categoriaService.createCategorias(categoria)
    .subscribe(data=>{
      alert("Se Agrego Con exito");
      this.router.navigate(["cliente/cliente-producto"])
    })
  }

}
