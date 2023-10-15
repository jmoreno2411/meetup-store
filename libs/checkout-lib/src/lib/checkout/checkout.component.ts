import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../core/services/orders.service';
import { Product } from '@meetup-store/shared';

@Component({
  selector: 'meetup-store-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  constructor(private ordersService: OrdersService) {}

  onAddProduct(product: Product) {
    this.ordersService.addProduct(product);
  }

  onRemoveProduct(product: Product) {
    this.ordersService.removeProduct(product);
  }

  getOrdersTotal() {
    return this.ordersService.getOrdersTotalPrice();
  }

  getOrders() {
    return this.ordersService.orders();
  }
}
