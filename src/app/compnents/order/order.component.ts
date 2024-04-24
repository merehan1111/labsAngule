import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Icategory} from '../../models/icategory';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit {
  categories:Icategory[];  
  selectedCatId:number=0;
  receivedTotal :number=0;
  @ViewChild('userInp') myInp!:ElementRef  // not null assertion operator
  constructor(){

    this.categories=[
      {id:1,name:"Laptop"},
      {id:2,name:"Mobil"},
      {id:3,name:"tablet"},
  
    ]
  }
  calculateTotalPrice(top:number){
    this.receivedTotal=top;


  }
  ngAfterViewInit(): void {
    this.myInp.nativeElement.value="merehan"
  }


}
