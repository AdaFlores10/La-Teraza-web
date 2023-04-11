import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from 'src/app/Service/carrito-compras.service';
import { Chart,registerables } from 'chart.js';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';
import { DetalleVenta } from 'src/app/Models/DetalleVenta';
Chart.register(...registerables)
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor(private carrioservice:CarritoComprasService) { }
  ctx:any
  detalles:DetalleVenta[]=[];
  label:any[];
  prueba:any[];
  data:any[];
  ngOnInit(): void {
    this.getDetalles()
    console.log(this.label)
  }

  cargar(labels:any,data:any){
    this.ctx = document.getElementById('myChart6');
    new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Cantidad Vendida',
          data: data ,
          backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)'
          ],
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }
  getDetalles(){
    this.carrioservice.listarDet().subscribe(
      detalles=>{
        this.detalles=detalles;
        this.label=detalles.map(detalles=>detalles.producto.producto)
        this.data=detalles.map(detalles=>detalles.cantidad)
        this.cargar(this.label,this.data)
        console.log(detalles);
      }
    );
  }}
