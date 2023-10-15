import { Component } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { Order } from '@meetup-store/shared';

@Component({
  selector: 'meetup-store-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  orders!: Order[];

  constructor(private ordersService: OrdersService) {}

  // ngOnInit() {
  //   this.ordersService.getOrders().subscribe(orders => {
  //     console.log('ORDERS', orders);
  //     this.orders = orders;
  //   })
  // }

  getOrdersQuantity() {
    return this.ordersService.getOrdersQuantity();
  }
}
