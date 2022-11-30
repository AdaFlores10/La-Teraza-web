import { Injectable, OnInit } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../Models/Categoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private urlEndPoint:string="http://localhost:8080/categoria"
  constructor(private http:HttpClient) { } 
  getCategorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlEndPoint + "/categorias");
  }
  createCategorias(categoria:Categoria){
    return this.http.post<Categoria>(this.urlEndPoint + "/categorianew",categoria )
  } 

  // editar
  getCategoriasId(idCategoria:number){
    return this.http.get<Categoria>(this.urlEndPoint+"/categoria/"+idCategoria);
  }
  updateCategorias(categoria:Categoria){
    return this.http.put<Categoria>(this.urlEndPoint+"/categoriaupdate/"+categoria.idCategoria,categoria);
  }

  deleteCategoria(categoria:Categoria):Observable<any>{
    return this.http.delete<Categoria>(this.urlEndPoint+"/categoriadelete/"+categoria.idCategoria);
  }
}
