import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notification:string[];
  constructor() {
    this.notification=[
      "message un read",
      "message not open",
      "message receve",
      "message read success",
      "",
      "message shared succes"
    ]
   }
   getNotification():Observable<string>{
    return new Observable<string>((observer)=>{
      //observer.next()
      //observer.error()
      //observer.complete()
      let counter=0;
      let notivicationInterval =setInterval(()=>{
        if(this.notification[counter]==""){
          observer.error("this notif is empty");
        }
        if(counter==this.notification.length){
          observer.complete();
        }

        observer.next(this.notification[counter])
        counter++;

        

      },2000);
      return{
        unsubscribe:()=>{
          clearInterval(notivicationInterval )

        }
      }
    })
   }
}
