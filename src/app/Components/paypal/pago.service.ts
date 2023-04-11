import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor(private http:HttpClient) { }

  private urlEndPoint:string="https://api.apilayer.com/exchangerates_data/convert?to=USD&from=PEN&amount="
  
  getConvertir(monto:number){
    return this.http.get(this.urlEndPoint +`${monto}`);
  }
  
}
