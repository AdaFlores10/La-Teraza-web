import { Component, OnInit } from '@angular/core';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {
  valor:boolean;
  monto:number;
  montodo:number;

  constructor(private config:NgbProgressbarConfig,private router:Router) { 
    config.showValue=true,
    config.type="success",
    config.striped=true,
    config.animated=true
    config.height='30px';
  }

  ngOnInit(): void {
    this.monto=Number (localStorage.getItem("monto"));
    console.log(this.monto)
    this.montodo=Number (localStorage.getItem("montodolares"));
    console.log(this.montodo)
    this.valor=true;
  }
  cambiarValor(){
    this.valor=false;
   }
   irPagar(){
    this.router.navigate(["pagos"]);
   }

}
