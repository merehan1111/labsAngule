import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  products:Iproduct[];
 

  constructor() {
    
    this.products=[
      {id:100,name:"Dell labtop",price:100000,quantity:3,imgUrl:"https://fakeimg.pl/250x100/ff0000/",catId:1},
      {id:200,name:"HP labtop",price:600000,quantity:0,imgUrl:"https://fakeimg.pl/250x100/ff0000/",catId:1},
      {id:300,name:"Iphone",price:300000,quantity:1,imgUrl:"https://fakeimg.pl/250x100/ff0000/",catId:2},
      {id:400,name:"oppo",price:700000,quantity:2,imgUrl:"https://fakeimg.pl/250x100/ff0000/",catId:2},
      {id:500,name:"sumsung tablet",price:800000,quantity:0,imgUrl:"https://fakeimg.pl/250x100/ff0000/",catId:3},
      {id:600,name:"lenovo tablet",price:50000,quantity:4,imgUrl:"https://fakeimg.pl/250x100/ff0000/",catId:3},
    ]

   }
   getAllProduct(){
    return this.products
   }
   getProductById(id:number):Iproduct|null{
    let foundedPro=this.products.find((prd)=>prd.id==id);
     return foundedPro?foundedPro:null;
   }
   getProductByCatId(catid:number):Iproduct[]{
    if(catid==0){
          return this.products;
         }
         else{
    return this.products.filter((prd)=>prd.catId==catid);

         }
   }
   mapProductsToId():number[]{
    return this.products.map((prd)=>prd.id)
   }
}
