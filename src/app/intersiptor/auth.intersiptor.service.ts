import { HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export function authIntersiptor(req:HttpRequest<any>,next:HttpHandlerFn){
    let modifiesReq=req;
    if(req.method=="POST"){
        modifiesReq=req.clone({
            headers:req.headers.append('Lang',"en")
        })
    }
    return next(modifiesReq).pipe(
        tap((event)=>{
            if(event.type==HttpEventType.Response){
                console.log(event);
                
            }
        })
    )
}