import { Categoria } from "./Categoria";

export class Producto{
    public IdProducto!:number;
    public producto!:string;
    public imagen!:string;
    public precio!:number;
    public estado!:number;
    public categoria!:Categoria;
}