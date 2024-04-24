import { Component, OnChanges, OnInit, Output } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {StyleProductsDirective} from '../../directives/style-products.directive'
import{NationalIdPipe} from '../../popies/national-id.pipe';
import{CriteCardPipe} from '../../popies/crite-card.pipe';
import { Input } from '@angular/core';
import {EventEmitter} from '@angular/core';
import{StaticProductsService} from '../../services/static-products.service'
import { Router } from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule,StyleProductsDirective,NationalIdPipe,CriteCardPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges,OnInit {
  products:Iproduct[]=[] as Iproduct[] ;
  filteredProduct:Iproduct[];
  updatedProductData: any
  // define event
  @Output()onTotalchange:EventEmitter<number>
  @Input()recivedCategryId:number=0
  totalOrderPrice:number=0;
  constructor(private _StaticProductsService:StaticProductsService,
    private router:Router,
    private _ApiProductsService:ApiProductsService,
    ){
    //this.products= this._StaticProductsService.getAllProduct();
     
    
    this.filteredProduct=this.products
    this.onTotalchange=new EventEmitter<number>();
  
  }
  ngOnInit(): void {
    this._ApiProductsService.getAllProducts().subscribe({
      next:(res)=>{
        this.products=res;
        this.filteredProduct=this.products
      },
      error:(err)=>{
        console.log(err);
        

      }
    })
    //this.loadedProd();
  }
  buy(count:string,price:number)
  {
      this.totalOrderPrice +=+count*price;
    //fire event
    this.onTotalchange.emit(this.totalOrderPrice);
  }
  change(){
    //this.selectedCatId=3;
  }
  ngOnChanges(){
   //this.filteredProduct= this._StaticProductsService.getProductByCatId(this.recivedCategryId)

  }
  // filterProduct(){
  //   if(this.recivedCategryId==0){
  //     this.filteredProduct=this.products;
  //   }
  //   else{
  //     this.filteredProduct=this.products.filter((prd)=>prd.catId==this.recivedCategryId)
  //   }
  // }
  navToDetails(id:number){
    //this.router.navigateByUrl('/ProductDetails')or
    this.router.navigateByUrl(`/ProductDetails/${id}`);

  }
  // loadedProd(){
  //   this._ApiProductsService.getAllProducts().subscribe((products)=>{
  //     this.products=products;
      
  //   })
  //}
  deleProduct(id:number):void{
    this._ApiProductsService.deleteProductById(id).subscribe({
      next:()=>{
        console.log('dele succes');
        
        // this.router.navigateByUrl('/products');
        //this.products=this.products.filter((prd)=>prd.id !==id)

      },
      error:(err)=>{
        console.log(err);
        
      }
    })

  }
  UpdateProduct(id:number,updaPro:Iproduct):void{
    this._ApiProductsService.updateProductById(id,updaPro).subscribe({
      next:(updateProduct)=>{
        console.log('upd success');
      },
    error:(err)=>{
      console.log(err);
      
    }
  })
  }
  
}
