import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Rol } from '../Models/Rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private urlEndPoint:string="http://localhost:8080/rol"
  constructor(private http:HttpClient) { } 
  getRoles():Observable<Rol[]>{
    return this.http.get<Rol[]>(this.urlEndPoint + "/roles");
  }
  createRoles(rol:Rol){
    return this.http.post<Rol>(this.urlEndPoint + "/rolnew",rol )
  } 

  // editar
  getRolesId(idRol:number){
    return this.http.get<Rol>(this.urlEndPoint+"/rol/"+idRol);
  }
  updateRoles(rol:Rol){
    return this.http.put<Rol>(this.urlEndPoint+"/rolupdate/"+rol.idRol,rol);
  }

  deleteRol(rol:Rol):Observable<any>{
    return this.http.delete<Rol>(this.urlEndPoint+"/roldelete/"+rol.idRol);
  }
}
