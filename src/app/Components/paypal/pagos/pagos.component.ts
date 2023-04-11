import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
import { PagoService } from '../pago.service';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
import { CabeceraVenta } from 'src/app/Models/CabeceraVenta';
import { LoginService } from 'src/app/Service/login.service';
declare var paypal;

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})

export class PagosComponent implements OnInit {
  @ViewChild('paypal',{static:true}) paypalElement : ElementRef;

  
  constructor(private config:NgbProgressbarConfig,private router:Router,private pagoService:PagoService,
    private loginService:LoginService, private detalleService:CarritoComprasService) { 
    config.showValue=true,
    config.type="success",
    config.striped=true,
    config.animated=true
    config.height='30px';
  }
cabecera: CabeceraVenta;
  dolares: number;
  monto:number;
  montodo:number;
  correo:string;
  ngOnInit(): void {
    

    swal.fire({
      title: 'Quiere recibir un correo',
      text: "Se enviara los detalles de su compra",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, acepto'
    }).then((result) => {
      if (result.isConfirmed) {
        swal.fire({
          title: 'Digite su correo',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Look up',
          showLoaderOnConfirm: true,
        }).then((result) => {
          if (result.isConfirmed) {
            this.correo=result.value;
            console.log(this.correo)
            localStorage.setItem("correo",this.correo);
            swal.fire({
              icon: 'success',
              title: `Correo registrado: ${result.value}`,
              
            })
          }
        })
      }
    })


    this.getCabeceras();
    this.monto=Number (localStorage.getItem("monto"));
    console.log(this.monto)
    this.convertir(this.monto)

    
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
                value:this.montodo
              }
            }
          ]
        })
      },
      onApprove:function(data,actions){
        actions.order.capture().then(function(detalles){
          window.location.href="validar"
          
          
        });
      },
      onCancel:function(data){
        
        swal.fire(
          'Pago Cancelado',
          '',
          'error'
        )
      }
  }).render(this.paypalElement.nativeElement );
  }

  mostrarYape(){
    swal.fire({
      title: `Monto: ${this.monto}`,
      text: 'Escanea el Codigo',
      imageUrl: 'https://i.postimg.cc/dVYKJtbG/yape.jpg',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      imageWidth: 800,
      imageHeight: 400,
      confirmButtonText: 'Pago Realizado'
}).then((result) => {
  if (result.isConfirmed) {
    swal.fire(
      'Gracias por Preferirnos',
      'Nos pondremos en Contacto contigo',
      'success'
    )
    let idUser=localStorage.getItem("iduser");
        this.loginService.getCorreo(+idUser!,this.correo).subscribe(dasd=>{
          window.location.href="validar"
        }
        )
    

  }
})
  }
  convertir(monto:number){ 
    this.pagoService.getConvertir(monto).subscribe(
      (data:any)=>{ 
        this.dolares= data.result
        console.log(Math.round(this.dolares*100)/100);
        this.montodo=Math.round(this.dolares*100)/100
        
      }
    )
  }
  formateaValor(valor) {
    // si no es un número devuelve el valor, o lo convierte a número con 2 decimales
    return isNaN(valor) ? valor : parseFloat(valor).toFixed(2);
  }

  getCabeceras(){
    let idUser=localStorage.getItem("iduser");
    this.detalleService.getCabecera(Number(idUser)).subscribe(cabecera=>{
      this.cabecera=cabecera
    })
  }

  comprar(){
    this.detalleService.venderCab(this.cabecera.idCabecera,this.cabecera).subscribe(dasd=>{

    })
    console.log(this.cabecera.idCabecera);
    console.log(this.cabecera);
    // this.getCabeceras();
    // this.listarDetalles();
  }
  prueba(){
    let idUser=localStorage.getItem("iduser");
        this.loginService.getCorreo(+idUser!,this.correo).subscribe(dasd=>{
          console.log("fsfsdf");
        }
          
        )
      }                                            

}






