import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  notifications: string[] = [];

  constructor(private _notification: NotificationService) {}

  ngOnInit(): void {
    this.subscription = this._notification.getNotification().subscribe({
      next: (notification: string) => {
        this.notifications.push(notification);
      },
      error: (error: string) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.log('Notification stream completed.');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
