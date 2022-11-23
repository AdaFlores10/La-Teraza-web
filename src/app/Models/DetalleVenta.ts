import { CabeceraVenta } from "./CabeceraVenta";
import { Producto } from "./Producto";

export class DetalleVenta{
    public idDetalleVenta!:number;
    public cantidad!:number;
    public precio!:number;
    public producto!:Producto;
    public cabecera!:CabeceraVenta
    public estado!:number;
}