import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PagoService } from './pago.service';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from 'src/app/Service/login.service';
import { Usuario } from 'src/app/Models/Usuario';
import { Router } from '@angular/router';

declare var paypal;


@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  @ViewChild('paypal',{static:true}) paypalElement : ElementRef;
  
  dolares: number;
  progreso: number;
  public user:Usuario = new Usuario();
  username:string;
  monto:number;

  constructor(private pagoService:PagoService, 
    private config:NgbProgressbarConfig,private loginService:LoginService,
    private router:Router) {
    config.showValue=true,
    config.type="success",
    config.striped=true,
    config.animated=true
    config.height='30px';

   }

  ngOnInit() {
    this.monto=Number (localStorage.getItem("monto"));
    console.log(this.monto)
    this.username=localStorage.getItem("user"); 
    this.loginService.getUserbyUaser(this.username)
    .subscribe(data=>{
      this.user=data;})


    this.progreso=25
    paypal.Buttons({
      style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'pill',
          label: 'pay'
      },
      createOrder:(data,actions)=>{
        return actions.order.create({
          purchase_units:[
            {
              amount:{
                value:100
              }
            }
          ]
        })
      },
      onApprove:function(data,actions){
        actions.order.capture().then(function(detalles){
        
        });
      },
      onCancel:function(data){
        alert("PAGO CANCELADO")
      }
  }).render(this.paypalElement.nativeElement );
  }

  convertir(monto:number){ 
    this.pagoService.getConvertir(monto).subscribe(
      (data:any)=>{ 
        this.dolares= data.result
        console.log(data);
        return Math.round(this.dolares*100)/100
      }
    )
  }
  irEnvio(){
    this.router.navigate(["envio"]);
    this.convertir(this.monto)
    localStorage.setItem("montodolares",String(this.convertir(this.monto)) );
    
  }

}
