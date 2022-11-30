import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoPago } from 'src/app/Models/TipoPago';
import { TipopagoService } from 'src/app/Service/tipopago.service';

@Component({
  selector: 'app-edit-tdp',
  templateUrl: './edit-tdp.component.html',
  styleUrls: ['./edit-tdp.component.css']
})
export class EditTdpComponent implements OnInit {

  public tipopago:TipoPago= new TipoPago()
  constructor(private router:Router, private tipopagoService:TipopagoService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let idTipoPago=localStorage.getItem("idTipoPago"); 
    this.tipopagoService.getTiposPagoId(+idTipoPago!)
    .subscribe(data=>{
      this.tipopago=data;
    })
  }
  
  ActualizarTipoPago(tipopago:TipoPago){
    this.tipopagoService.updateTiposPago(tipopago)
    .subscribe(data=>{
      this.tipopago=data;
      alert("Se actualizó con éxito");
      this.router.navigate(["cliente/cliente-tipopago"])
    })
  }

}
