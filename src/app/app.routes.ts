import { Routes } from '@angular/router';
import { HomeComponent } from './compnents/home/home.component';
import { AboutUsComponent } from './compnents/about-us/about-us.component';
import { ProductsComponent } from './compnents/products/products.component';
import { NotFoundComponent } from './compnents/not-found/not-found.component';
import { VisionComponent } from './compnents/vision/vision.component';
import { ValuesComponent } from './compnents/values/values.component';
import { ProductDetailsComponent } from './compnents/product-details/product-details.component';
import { LogineComponent } from './compnents/logine/logine.component';
import { authGuard } from './gards/auth.guard';
import { AddProductComponent } from './compnents/add-product/add-product.component';
import { RegisterComponent } from './compnents/register/register.component';

export const routes: Routes = [
    {path:'',pathMatch:'full',redirectTo:'Home'},
    {path:'Home',component:HomeComponent},
    {path:'products',loadComponent:()=>import('./compnents/products/products.component')
    .then((obj)=>obj.ProductsComponent),canActivate:[authGuard]},
    {path:'Logine',component:LogineComponent},
    {path:'AddProduct',component:AddProductComponent},
    {path:'Register',component:RegisterComponent},
    {path:'AboutUs',component:AboutUsComponent, children:[
        //{path:'',component:VisionComponent},
        {path:'',pathMatch:'full',redirectTo:'Vision'},
        {path:'Vision',component:VisionComponent},
        {path:'Values',component:ValuesComponent}
    ]},
    {path:'ProductDetails/:id',component:ProductDetailsComponent},
    {path:'**',component:NotFoundComponent}
    
];
