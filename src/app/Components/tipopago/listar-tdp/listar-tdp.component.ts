import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoPago } from 'src/app/Models/TipoPago';
import { TipopagoService } from 'src/app/Service/tipopago.service';

@Component({
  selector: 'app-listar-tdp',
  templateUrl: './listar-tdp.component.html',
  styleUrls: ['./listar-tdp.component.css']
})
export class ListarTdpComponent implements OnInit {

  tipospago: TipoPago[]=[];
  constructor(private router:Router,private tipopagoService:TipopagoService) { }

  ngOnInit(): void {
    this.tipopagoService.getTiposPago().subscribe(
      tipospago=>{
      this.tipospago=tipospago;
      }
    );
  }

  Delete(tipopago:TipoPago){
    this.tipopagoService.deleteTipoPago(tipopago)
    .subscribe(data=>{
      this.tipospago = this.tipospago.filter(t=>t.idTipoPago!==tipopago.idTipoPago);
      alert("Tipo de Pago Eliminado con Exito")
    })
  }
  Editar(tipopago:TipoPago):void{
    localStorage.setItem("idTipoPago",tipopago.idTipoPago.toString());
    this.router.navigate(["cliente/cliente-edittdp"]);
  }
}
