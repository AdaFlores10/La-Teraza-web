import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DetalleVenta } from '../Models/DetalleVenta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

  private url:string="http://localhost:8080/detalle/detalles";

  constructor(private http:HttpClient) { }

  listarCabeceras():Observable<DetalleVenta[]>{
    return this.http.get<DetalleVenta[]>(this.url);
  }
}
