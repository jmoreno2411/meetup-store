import { Component } from '@angular/core';
import { OrdersService } from './services/orders.service';

@Component({
  selector: 'meetup-store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private ordersService: OrdersService) {}

  getOrdersQuantity() {
    return this.ordersService.getOrdersQuantity();
  }
}
