import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-logine',
  standalone: true,
  imports: [],
  templateUrl: './logine.component.html',
  styleUrl: './logine.component.css'
})
export class LogineComponent {
  isLogged:boolean;
  constructor(private _userAuth:UserAuthService){
    this.isLogged=this._userAuth.getUserLogined();

  }
  login(){
    this._userAuth.login();
    this.isLogged=this._userAuth.getUserLogined();

  }
  logout(){
    this._userAuth.logout();
    this.isLogged=this._userAuth.getUserLogined();

  }

}
