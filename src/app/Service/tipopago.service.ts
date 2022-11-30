import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TipoPago } from '../Models/TipoPago';

@Injectable({
  providedIn: 'root'
})
export class TipopagoService {

  private urlEndPoint:string="http://localhost:8080/tipopago"
  constructor(private http:HttpClient) { } 
  getTiposPago():Observable<TipoPago[]>{
    return this.http.get<TipoPago[]>(this.urlEndPoint + "/tipospago");
  }
  createTiposPago(tipopago:TipoPago){
    return this.http.post<TipoPago>(this.urlEndPoint + "/tipopagonew",tipopago)
  } 

  // editar
  getTiposPagoId(idTipoPago:number){
    return this.http.get<TipoPago>(this.urlEndPoint+"/tipopago/"+idTipoPago);
  }
  updateTiposPago(tipopago:TipoPago){
    return this.http.put<TipoPago>(this.urlEndPoint+"/tipopagoupdate/"+tipopago.idTipoPago,tipopago);
  }

  deleteTipoPago(tipopago:TipoPago):Observable<any>{
    return this.http.delete<TipoPago>(this.urlEndPoint+"/tipopago/"+tipopago.idTipoPago);
  }
}
