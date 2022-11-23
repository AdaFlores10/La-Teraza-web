import { TipoPago } from "./TipoPago";
import { Usuario } from "./Usuario";
export class CabeceraVenta{
    public idCabecera!:number;
    public bruto!:number;
    public igv!:number;
    public neto!:number;
    public tipoCabecera!:string;
    public fechamat!:string;
    public usuario!:Usuario;
    public tipoPago!:TipoPago;
    public estado!:number;

}