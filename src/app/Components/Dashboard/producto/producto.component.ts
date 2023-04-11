import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';
Chart.register(...registerables)
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  ctx:any
  productos:Producto[]=[];
  label:any[];
  data:any[];

  constructor(private productoService:ProductoService) {
    
  }
  ngOnInit(): void {
    this.getProducto();
  }


  cargar(labels:any,data:any){
    this.ctx = document.getElementById('myChart6');
    new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Precio de Productos',
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

  getProducto(){

  this.productoService.getProductos().subscribe(
    productos=>{
      this.productos=productos;
      this.label=productos.map(productos=>productos.producto)
      this.data=productos.map(productos=>productos.precio)
      this.cargar(this.label,this.data)
      console.log(productos);
    }
  );



}
}



  
  

  


