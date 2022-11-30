import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoPago } from 'src/app/Models/TipoPago';
import { TipopagoService } from 'src/app/Service/tipopago.service';

@Component({
  selector: 'app-add-tdp',
  templateUrl: './add-tdp.component.html',
  styleUrls: ['./add-tdp.component.css']
})
export class AddTdpComponent implements OnInit {

  public tipopago:TipoPago = new TipoPago()

  constructor(private router:Router, private tipopagoService:TipopagoService) { }

  ngOnInit(): void {
  }

  
  GuardarTipoPago(tipopago:TipoPago){
    this.tipopagoService.createTiposPago(tipopago)
    .subscribe(data=>{
      alert("Se Agrego Con exito");
      this.router.navigate(["cliente/cliente-tipopago"])
    })
  }

}
