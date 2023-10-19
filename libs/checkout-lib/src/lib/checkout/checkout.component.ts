import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersStateService } from '../core/services/orders-state.service';
import { Product } from '@meetup-store/shared';
import { OrdersChannelService, ProductEvent } from '../core/services/orders-channel.service';

@Component({
  selector: 'meetup-store-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  constructor(
    private ordersStateService: OrdersStateService,
    private orderChannelService: OrdersChannelService
  ) {}

  onAddProduct(product: Product) {
    this.orderChannelService.postProductEvent(
      {
        product: product,
        operation: 'add' 
      } satisfies ProductEvent
    );
  }

  onRemoveProduct(product: Product) {
    this.orderChannelService.postProductEvent(
      {
        product: product,
        operation: 'remove' 
      } satisfies ProductEvent
    );
  }

  getOrdersTotal() {
    return this.ordersStateService.getOrdersTotalPrice();
  }

  getOrders() {
    return this.ordersStateService.getOrders();
  }
}
