import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './compnents/navbar/navbar.component';
//import { ProductsComponent } from './compnents/products/products.component';
import { FooterComponent } from './compnents/footer/footer.component';
import { OrderComponent } from './compnents/order/order.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,NavbarComponent,OrderComponent,FooterComponent,RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab_2';
}
