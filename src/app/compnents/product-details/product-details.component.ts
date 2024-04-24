import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {StaticProductsService} from '../../services/static-products.service'
import { Iproduct } from '../../models/iproduct';
import {Location} from '@angular/common'
import { ApiProductsService } from '../../services/api-products.service';



@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  currentId:number=0;
  product:Iproduct|null=null;
  IdsArr:number[];
  //currentIndex:number=0;
  
  constructor(private _activatedRoute:ActivatedRoute,private _StaticProductsService:StaticProductsService,
    private _location:Location,private _router:Router,
    private _ApiProductsService:ApiProductsService
    ){
      this.IdsArr=this._StaticProductsService.mapProductsToId()


  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((paramMap)=>{
      this.currentId= Number(paramMap.get('id'));
      //this.product=this._StaticProductsService.getProductById(this.currentId);
      this._ApiProductsService.getProductById(this.currentId).subscribe({
        next:(res)=>{
          this.product=res;

        },
        error:(err)=>{
          console.log(err);
        }
      })
    });
   //this.currentId= Number(this._activatedRoute.snapshot.paramMap.get('id'));
   //this.product=this._StaticProductsService.getProductById(this.currentId); 
  }
  goBack(){
    this._location.back();
    

  }
  next(){
    let currentIndex=this.IdsArr.findIndex((id)=>id== this.currentId);
    if(currentIndex !=this.IdsArr.length-1){
    this._router.navigateByUrl(`/ProductDetails/${this.IdsArr[currentIndex+1]}`);
    }
    

  }
  prev(){
    let currentIndex=this.IdsArr.findIndex((id)=>id== this.currentId);
    if(currentIndex !=0){
    this._router.navigateByUrl(`/ProductDetails/${this.IdsArr[currentIndex-1]}`)

  }
}

}
