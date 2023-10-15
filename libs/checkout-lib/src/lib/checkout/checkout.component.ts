import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../core/services/orders.service';

@Component({
  selector: 'meetup-store-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  constructor(private ordersService: OrdersService) {}

  getOrders() {
    return this.ordersService.orders();
  }
}
