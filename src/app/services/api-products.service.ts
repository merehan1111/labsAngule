import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';


@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private _httpClient:HttpClient,private userAuth:UserAuthService) { }
  getAllProducts():Observable<Iproduct[]>{
     return this._httpClient.get<Iproduct[]>(`http://localhost:3000/products `,{
      headers:new HttpHeaders({
        "authorization":this.userAuth.getToken()
      }) 
     });

  }
  getProductById(id:number):Observable<Iproduct>{

    return this._httpClient.get<Iproduct>(`http://localhost:3000/products/${id}`);
  }
  getProductByCatId(catId:number):Observable<Iproduct[]>
  {
    // لو عايز ابعت اكتر من  حاجه
    let searchString=new HttpParams()
    searchString=searchString.append("catId",catId)
    searchString=searchString.append("limit",5)

    
    return this._httpClient.get<Iproduct[]>(`http://localhost:3000/products?`,{
      
      //params:new HttpParams().set("catId",catId)
      params:searchString

    });
  }
  addProduct(newProduct:Iproduct):Observable<Iproduct>{
    return this._httpClient.post<Iproduct>(`http://localhost:3000/products`,newProduct)

  }
  deleteProductById(id:number):Observable<Iproduct>{
    return this._httpClient.delete<Iproduct>(`http://localhost:3000/products/${id}`)


  }
  updateProductById(id:number,updateProduct:Iproduct):Observable<Iproduct>{
    return this._httpClient.patch<Iproduct>(`http://localhost:3000/products/${id}`,updateProduct)

  }
}
