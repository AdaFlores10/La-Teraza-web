import { HttpEvent, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>,next:HttpHandler): Observable<HttpEvent<any>>{
    const headers = new HttpHeaders({
      "apikey":"phhdCNRhuuuoHDXo1SJKqDHKOVCLotPP"
    });

    const reqClone = req.clone({
      headers
    })
    return next.handle(reqClone)
  }
}
