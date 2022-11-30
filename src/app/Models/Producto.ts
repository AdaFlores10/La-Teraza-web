import { Categoria } from "./Categoria";

export class Producto{
    public idProducto!:number;
    public producto!:string;
    public imagen!:string;
    public descripcion!:string;
    public precio!:number;
    public estado!:number;
    public categoria!:Categoria;
}