import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  islogged!:boolean;
  constructor(private _userAuth:UserAuthService){}
  ngOnInit(): void {
  ///this.islogged=this._userAuth.getUserLogined()
  this._userAuth.getAuthSubject().subscribe({
    next:(status)=>{
      this.islogged=status;

    }
  })
  }

}
