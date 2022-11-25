import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Models/Producto';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlEndPoint:string="http://localhost:8080/producto"
  constructor(private http:HttpClient) { } 
  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlEndPoint + "/productos");
  }
  createProducto(producto:Producto){
    return this.http.post<Producto>(this.urlEndPoint + "/productonew",producto)
  }
  getProductoIdCat(idCat:number):Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlEndPoint+"/productoscat/"+idCat);
  } 

  // editar
  getProductoId(idProducto:number){
    return this.http.get<Producto>(this.urlEndPoint+"/producto/"+idProducto);
  }
  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.urlEndPoint+"/productoupdate/"+producto.idProducto,producto);
  }

  deleteProducto(producto:Producto):Observable<any>{
    return this.http.delete<Producto>(this.urlEndPoint+"/productodelete/"+producto.idProducto);
  }
}
