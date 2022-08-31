import { trigger } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { Touchscreen } from 'puppeteer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Administrar Catalogo de Productos';
  msg:string = '';
  EsconderActualizador:boolean = true;

  Catalogo = [
    {'Producto': 'Chocolito', Categoria : 'helado' , marca:'Savory'},
    {'Producto': 'Triton', Categoria : 'galleta' , marca: 'Nestle' },
    {'Producto': 'Pinguinito', Categoria : 'queque' , marca: 'Marinela'}
  ];

  model:any = {};
  model2:any = {};

  addProducto():void{
    this.Catalogo.push(this.model)
    this.msg = 'Producto Agregado';
  }

  deleteProducto(i:any):void{
    var answer = confirm('Seguro que quieres eliminar este producto ? ')
    if (answer === true){
      this.Catalogo.splice(i,1);
      this.msg = 'Se ha eliminado el Producto'
    }

  }
myValue:any;
  editProducto(i:any):void{
    this.EsconderActualizador = false;
    this.model2.Producto = this.Catalogo[i].Producto;
    this.model2.Categoria = this.Catalogo[i].Categoria;
    this.model2.marca = this.Catalogo[i].marca;
    this.myValue = i;
  }

  updateProducto():void{ 
    let i = this.myValue;
    for(let j = 0; j < this.Catalogo.length; j++){
      if(i == j){
       this.Catalogo[i] = this.model2; 
       this.msg = 'Producto actualizado correctamente !'
        this.model2 = {};
      }
    }
  }

  CerrarAlerta():void{
    this.msg = '';
  }


}

